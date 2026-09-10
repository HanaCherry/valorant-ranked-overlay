const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseProfile, profileUrl, createMonitor, INTERVAL } = require('../tracker-browser');

test('reads labelled rank and stats, without using peak or percentile', () => {
  const p = parseProfile('Peak Rank\nRadiant\nCurrent Rank\nGold II\n45 RR\nK/D Ratio\n1.25\nTop 10%\nHeadshot %\n24.5%\nKills\n1,234');
  assert.equal(p.rank, 'Gold 2'); assert.equal(p.rr,45); assert.equal(p.kd,1.25); assert.equal(p.hs,24.5); assert.equal(p.kills,1234);
  assert.equal(p.deaths,undefined);
  assert.throws(() => parseProfile('Peak Rank\nRadiant\n45 RR'));
  assert.throws(() => parseProfile('Current Rank\nGold 2'));
  assert.throws(() => parseProfile('Just a moment. Verify you are human'));
  assert.throws(() => parseProfile('This profile is private'));
  assert.equal(new URL(profileUrl('Player /?', 'TAG')).hostname,'valocheck.com');
});

function fixture(fetchProfile) {
  let cfg={trackerMode:'browser',riotName:'Player',riotTag:'TAG',region:'eu'};
  let state={riotId:'Player#TAG',rank:'Gold 1',rr:20,session:{kills:7}};
  const scheduled=[];
  const monitor=createMonitor({readConfig:()=>cfg,readState:()=>structuredClone(state),writeState:s=>state=s,fetchProfile,now:()=>1000,schedule:(fn,ms)=>{scheduled.push({fn,ms});return scheduled.length;},cancel:()=>{}});
  return {monitor,scheduled,get state(){return state;},cfg};
}
test('eight-minute retry retains last good state when site refuses reading',async()=>{
  const f=fixture(async()=>{throw new Error('blocked');});
  await assert.rejects(f.monitor.run(),/blocked/);
  assert.equal(f.state.rank,'Gold 1');assert.equal(f.state.rr,20);
  assert.equal(f.scheduled[0].ms,480000);assert.equal(INTERVAL,480000);
  assert.equal(f.monitor.status.error,'blocked');
  f.cfg.trackerMode='manual';f.monitor.arm();assert.equal(f.monitor.status.nextRun,null);
});
test('serializes requests and discards results after pause',async()=>{
  let resolve; const f=fixture(()=>new Promise(r=>resolve=r));
  const task=f.monitor.run();await assert.rejects(f.monitor.run(),/déjà/);
  f.cfg.trackerMode='manual';resolve({rank:'Radiant',rr:900});await task;
  assert.equal(f.state.rank,'Gold 1');assert.equal(f.monitor.status.nextRun,null);
});
test('successful update keeps session counters and schedules next read',async()=>{
  const f=fixture(async()=>({riotId:'Player#TAG',name:'Player',rank:'Gold 2',rr:45}));
  await f.monitor.run();assert.equal(f.state.rank,'Gold 2');assert.equal(f.state.session.kills,7);
  assert.equal(f.monitor.status.lastSuccess,1000);assert.equal(f.monitor.status.nextRun,481000);
});
