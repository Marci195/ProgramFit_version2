# KI-Coach einrichten

Diese Version enthält einen KI-Coach über ein kleines Backend unter `api/coach.js`.

## Wichtig

Trage deinen OpenAI API-Key **niemals** direkt in `index.html`, `app.js` oder GitHub Pages ein.  
Der Key muss als Environment Variable im Backend liegen.

## Variante A: Am einfachsten mit Vercel

1. Gehe zu https://vercel.com
2. Mit GitHub anmelden
3. Dein Repository `Program_Fitness` importieren
4. Projekt deployen
5. In Vercel öffnen:
   - Project Settings
   - Environment Variables
6. Neue Variable anlegen:

```txt
OPENAI_API_KEY=dein_api_key
```

7. Danach erneut deployen.

Deine Backend-Adresse sieht dann ungefähr so aus:

```txt
https://program-fitness.vercel.app/api/coach
```

Diese URL in der App im Tab **KI-Coach** eintragen und speichern.

## OpenAI API-Key erstellen

1. OpenAI Platform öffnen
2. API-Key erstellen
3. Key kopieren
4. In Vercel als `OPENAI_API_KEY` speichern

## Was der Coach kann

- heutiges Training erklären
- rückenfreundliche Alternativen vorschlagen
- Schwierigkeit nach dem Training auswerten
- einfache Ernährungstipps geben
- Motivation und nächste Schritte geben

## Sicherheit

Der Coach ersetzt keinen Arzt oder Physiotherapeuten.  
Bei Schmerzen, Taubheit, Kribbeln oder Ausstrahlung ins Bein Training abbrechen und medizinisch/physiotherapeutisch abklären.
