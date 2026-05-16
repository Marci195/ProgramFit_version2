# Schritt-für-Schritt: Auf GitHub hochladen

## Variante A: Ohne Terminal

1. Gehe auf github.com und melde dich an.
2. Klicke rechts oben auf **+** → **New repository**.
3. Repository-Name: `fit-zusammen`
4. Sichtbarkeit: **Public**, wenn es Open Source sein soll.
5. Kein Häkchen bei README setzen, weil hier schon eine README enthalten ist.
6. Klicke auf **Create repository**.
7. Klicke auf **uploading an existing file**.
8. Ziehe alle Dateien aus diesem Ordner in GitHub hinein.
9. Unten bei Commit schreiben: `Initial commit`
10. Klicke auf **Commit changes**.

## GitHub Pages aktivieren

1. Im Repository auf **Settings** klicken.
2. Links auf **Pages** klicken.
3. Source: **Deploy from a branch**
4. Branch: `main`
5. Folder: `/root`
6. Speichern.

Die App ist danach unter dieser Adresse erreichbar:

```text
https://DEIN-GITHUB-NAME.github.io/fit-zusammen/
```

## Variante B: Mit Terminal auf Mac

Im Ordner der App:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-GITHUB-NAME/fit-zusammen.git
git push -u origin main
```
