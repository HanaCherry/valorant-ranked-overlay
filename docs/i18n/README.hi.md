# Valorant Ranked Overlay · GalaxyBunny Studio

OBS और Streamlabs के लिए लोकल ओवरले — रैंक, RR, एजेंट, स्क्वॉड और लेवल।

**Language:** [Français](../../README.md) · [English](../../README.en.md) · [All languages](https://hanacherry.github.io/valorant-ranked-overlay/?lang=hi)

## Valorant के लिए रैंक्ड स्टूडियो

लोकल डैशबोर्ड, पाँच पारदर्शी OBS ओवरले, गैलेक्सी थीम, वैकल्पिक सार्वजनिक Riot ID ट्रैकिंग, और स्क्वॉड के लिए वैकल्पिक Henrik API।

## सुविधाएँ

- **रैंक और RR** — Iron 1 → Radiant, मैन्युअल या सार्वजनिक प्रोफ़ाइल (Riot ID नाम#टैग)।
- **पाँच OBS ओवरले** — ranked, compact, agent, squad, level — पारदर्शी पृष्ठभूमि।
- **लाइव सेशन** — पैनल से किल और काउंटर।
- **एजेंट और स्क्वॉड** — चयनित एजेंट ओवरले; 5 साथियों के रैंक और स्टैट्स।
- **रैंक इफ़ेक्ट** — अनुकूलनीय ग्लो (बंद किया जा सकता है)।
- **डिज़ाइन से निजी** — सर्वर केवल 127.0.0.1 पर सुनता है।
- **वैकल्पिक Henrik** — कुंजी केवल data/credentials.json में।

## 4 चरणों में शुरू करें

Node.js 18 or newer. On Windows, LANCER.bat is enough after install.

```sh
git clone https://github.com/HanaCherry/valorant-ranked-overlay.git
cd valorant-ranked-overlay
npm install
npm start
```

Open http://127.0.0.1:8769/control.html. Manual mode works immediately.

## OBS / Streamlabs

1. Start the app and leave it running while you stream.
2. Copy the overlay URL from the panel.
3. Add a Browser source.
4. Paste the URL. Transparent background by default.

Sizes: ranked 700×220 · compact 420×140 · agent 760×210 · squad 440×260 · level 250×260.

## स्थानीय डेटा

सेटिंग्स data/ में रहती हैं। data/ या क्रेडेंशियल प्रकाशित न करें।

---

VALORANT और रैंक एसेट Riot Games के हैं। स्वतंत्र, अनौपचारिक प्रोजेक्ट। MIT लाइसेंस।
