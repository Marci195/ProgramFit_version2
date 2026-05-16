# Fit zusammen – Trainings-App für Paare

Eine einfache Open-Source-Web-App/PWA für gemeinsames Training zuhause und im Freien.

**Ziel:** Abnehmen, Muskeln aufbauen und rückenfreundlich trainieren – besonders mit vorsichtigen Varianten nach Bandscheibenvorfall.

> Hinweis: Diese App ersetzt keine ärztliche oder physiotherapeutische Beratung. Bei ausstrahlenden Schmerzen, Taubheit, Kribbeln oder Unsicherheit bitte medizinisch abklären.

## Funktionen

- 4-Tage-Trainingsplan pro Woche
- Übungsbibliothek mit Schritt-für-Schritt-Anleitungen
- Video-Platzhalter per YouTube-/Video-Link
- rückenfreundliche Hinweise pro Übung
- Pausen-Timer
- Fortschritt speichern: Gewicht, Bauchumfang, Notizen
- lokale Speicherung im Browser, kein Server nötig
- funktioniert als statische Website und kann über GitHub Pages veröffentlicht werden

## Projektstruktur

```text
fit-zusammen/
├── index.html
├── style.css
├── app.js
├── manifest.json
├── assets/
│   ├── videos/
│   └── images/
├── .github/
│   └── ISSUE_TEMPLATE/
├── .gitignore
├── .nojekyll
├── LICENSE
├── CONTRIBUTING.md
└── README.md
```

## Lokal starten

### Einfachste Variante

1. ZIP entpacken.
2. `index.html` doppelklicken.
3. App im Browser öffnen.

### Bessere Entwickler-Variante

Im Projektordner starten:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

```text
http://localhost:8000
```

## Videos ändern

Die Video-Links sind in `app.js` gespeichert. Suche dort nach `video:`.

Beispiel:

```js
video: 'https://www.youtube.com/embed/VIDEO_ID'
```

Für YouTube brauchst du immer den Embed-Link:

```text
https://www.youtube.com/embed/VIDEO_ID
```

Eigene Videos kannst du später z. B. über Cloudinary, Vimeo oder einen eigenen Server einbinden.

## Trainingsplan ändern

In `app.js` findest du die Bereiche:

- `exercises` = Übungsbibliothek
- `plan` = 4-Tage-Trainingsplan

Dort kannst du Übungen, Wiederholungen, Texte und Videos bearbeiten.

## GitHub Pages Veröffentlichung

1. Auf GitHub ein neues Repository erstellen, z. B. `fit-zusammen`.
2. Alle Dateien aus diesem Ordner hochladen.
3. In GitHub öffnen: **Settings → Pages**.
4. Bei **Build and deployment** auswählen:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Speichern.
6. Danach ist die App erreichbar unter:

```text
https://DEIN-GITHUB-NAME.github.io/fit-zusammen/
```

## Open Source Lizenz

Dieses Projekt verwendet die MIT-Lizenz. Du darfst es frei verwenden, verändern und weitergeben.

## Geplante Erweiterungen

- Login für zwei Personen
- Wochenkalender
- echte Videoverwaltung
- Export der Fortschritte als CSV
- Rücken-Modus mit Filter
- Ernährungstagebuch
- Erinnerungen / Push-Nachrichten


## KI-Coach

Diese Version enthält zusätzlich einen Tab **KI-Coach**.

Für echte KI-Antworten brauchst du ein kleines Backend, weil der OpenAI API-Key nicht öffentlich in GitHub Pages liegen darf.

Siehe: `KI_COACH_EINRICHTEN.md`

Kurzablauf:

1. Repository zu Vercel verbinden
2. Environment Variable `OPENAI_API_KEY` setzen
3. Backend-URL `/api/coach` in der App speichern
