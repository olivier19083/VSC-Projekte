
# JokeHub – React Web App

**JokeHub** ist eine unterhaltsame React-Anwendung, mit der Nutzer:innen Witze aus einer externen API anzeigen und eigene Witze lokal verwalten können. Die Anwendung wurde im Rahmen des Moduls **M294** (EFZ Praktikum) umgesetzt und erfüllt die vollständige **CRUD-Funktionalität** für benutzerdefinierte Inhalte.

---

## 🔍 Überblick

- **Technologien:** React, Vite, JavaScript, localStorage
- **API:** [Official Joke API](https://official-joke-api.appspot.com/random_joke)
- **Datenspeicherung:** localStorage (kein Backend erforderlich)
- **Routing:** React Router v6
- **Tests:** 5 Unit Tests mit Vitest

---

## 🚀 Funktionen

| Funktion                | Beschreibung                                                                 |
|-------------------------|-------------------------------------------------------------------------------|
| ✅ Zufallswitz anzeigen | Startseite lädt einen Witz über die Official Joke API                        |
| ✅ Witz hinzufügen      | Formular für benutzerdefinierte Witze (`AddJoke.jsx`)                         |
| ✅ Witze verwalten      | Anzeigen, Bearbeiten, Löschen über `MyJokes.jsx` / `EditJoke.jsx`             |
| ✅ Witze durchsuchen    | Live-Filter für gespeicherte Witze                                            |
| ✅ Persistenz           | Witze bleiben über Reloads hinweg erhalten (localStorage)                     |
| ✅ Validierung          | Pflichtfelder & einfache Prüfung der Eingaben                                 |
| ✅ Tests                | 5 Unit Tests (z. B. für Anzeigen, Löschen, Validierung)                       |

---

## 🧪 Testübersicht (Vitest)

| Test-ID | Beschreibung                                 | Ergebnis  |
|--------:|----------------------------------------------|-----------|
| T1      | Startseite zeigt API-Witz                    | ✅        |
| T2      | Witz kann erfolgreich hinzugefügt werden     | ✅        |
| T3      | Witz kann bearbeitet werden                  | ✅        |
| T4      | Witz wird korrekt gelöscht                   | ✅        |
| T5      | Validierung bei leeren Feldern greift       | ✅        |

> 💡 Alle Tests laufen erfolgreich. Fehlerhafte Testläufe wurden während der Entwicklung analysiert (z. B. fehlende Initialwerte im localStorage) und behoben.

---

## 🛠️ Installation & Start

```bash
# 1. Repository klonen
git clone https://github.com/dein-username/jokehub.git
cd jokehub

# 2. Abhängigkeiten installieren
npm install

# 3. Entwicklung starten
npm run dev
```

Öffne die App im Browser unter: `http://localhost:5173`

---

## 🧭 Projektstruktur (Kurzfassung)

```
├── src/
│   ├── components/       # JokeCard, Form, Filter
│   ├── pages/            # Home, MyJokes, AddJoke, EditJoke
│   ├── App.jsx           # Routing-Logik
│   ├── jokesStorage.js   # localStorage-Helper
│   └── tests/            # Unit Tests (Vitest)
```

---

## 📌 Hinweise

- Dieses Projekt verzichtet bewusst auf ein Backend.
- Die eigenen Witze sind lokal gespeichert und nicht öffentlich sichtbar.
- Als Inspirationsquelle diente das WISS-Quiz-Projekt aus dem Unterricht.
- Dokumentation, Storyboard, Klassendiagramm, Testplan und Use Cases sind im Abgabe-PDF enthalten.

---

## 👤 Autor: [Dein Name]

Modul: M294  
Ausbildungsbetrieb: [Deine Firma]  
Zeitraum: [z. B. Mai–Juni 2025]

---

## 🏁 Fazit

JokeHub erfüllt alle Anforderungen an ein individuelles EFZ-M294-Projekt mit React. Es demonstriert die Integration externer APIs, CRUD-Funktionalität, Routing, lokale Speicherung und komponentenbasiertes Design. Die Tests stellen sicher, dass alle Kernfunktionen stabil laufen.

Viel Spaß mit dem Projekt!
