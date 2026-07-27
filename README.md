# zukunftwollen

## EmailJS Setup

Diese Seite wird als statische Vite-Seite auf GitHub Pages betrieben. Das Kontaktformular versendet E-Mails über EmailJS, also ohne eigenes Backend.

### 1. EmailJS-Konto einrichten

1. Lege dir ein Konto auf EmailJS an: https://www.emailjs.com/
2. Öffne im Dashboard den Bereich **Email Services** und verbinde einen Versanddienst, zum Beispiel Gmail, Outlook oder einen SMTP-Provider.
3. Erstelle im Bereich **Email Templates** ein neues Template für das Kontaktformular.

### 2. Woher kommen die Keys?

Du brauchst drei Werte aus dem EmailJS-Dashboard:

- **Service ID**: findest du im Bereich **Email Services** beim verbundenen Dienst.
- **Template ID**: findest du im Bereich **Email Templates** beim Formular-Template.
- **Public Key**: findest du unter **Account** oder **Account Settings** im Dashboard. EmailJS nennt ihn im SDK als erforderlichen öffentlichen Schlüssel.

Diese Werte werden nicht direkt im Code hartcodiert, sondern als Vite-Umgebungsvariablen verwendet.

### 3. Lokale Konfiguration

1. Kopiere die Datei [zukunftwollen/.env.example](zukunftwollen/.env.example) nach [zukunftwollen/.env.local](zukunftwollen/.env.local).
2. Trage dort deine echten Werte ein:

```env
VITE_EMAILJS_SERVICE_ID=deine_service_id
VITE_EMAILJS_TEMPLATE_ID=deine_template_id
VITE_EMAILJS_PUBLIC_KEY=dein_public_key
```

3. Starte das Projekt lokal im Ordner [zukunftwollen](zukunftwollen):

```bash
npm install
npm run dev
```

### 4. GitHub Repository Variablen setzen

Damit GitHub Actions beim Build ebenfalls EmailJS kennt, setze im Repository unter **Settings → Secrets and variables → Actions → Variables** diese drei Variablen:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Die Workflow-Datei [ .github/workflows/deploy.yml ](.github/workflows/deploy.yml) liest genau diese Variablen beim Build ein.

### 5. EmailJS-Template-Mapping

Das Formular sendet die Felder `name`, `email` und `message`. Dein EmailJS-Template sollte diese Namen ebenfalls verwenden, zum Beispiel:

- `{{name}}`
- `{{email}}`
- `{{message}}`

Wenn du möchtest, kannst du zusätzlich ein Reply-To-Feld im Template verwenden, falls du Antworten direkt an die Absenderadresse leiten willst.

### 6. Projekt bauen und deployen

1. Lokal prüfen:

```bash
cd zukunftwollen
npm run build
```

2. Änderungen nach `main` pushen.
3. GitHub Actions baut die App und veröffentlicht sie automatisch auf GitHub Pages.

### 7. Wichtige Dateien

- [zukunftwollen/src/main.ts](zukunftwollen/src/main.ts)
- [zukunftwollen/src/style.css](zukunftwollen/src/style.css)
- [zukunftwollen/.env.example](zukunftwollen/.env.example)
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

### 8. Typische Fehlerquellen

- Fehlende oder falsch gesetzte `VITE_EMAILJS_*`-Variablen.
- Falsche `Service ID` oder `Template ID` aus dem EmailJS-Dashboard.
- Das Template erwartet andere Variablennamen als `name`, `email` und `message`.
- Die GitHub Actions-Variablen wurden im Repository nicht gesetzt.
