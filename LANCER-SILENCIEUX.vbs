Set sh = CreateObject("Wscript.Shell")
sh.CurrentDirectory = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
sh.Run "cmd /c node server.js", 0, False
