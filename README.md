# DevLogger — Track Your Dev Mode. Stay Real.

> A local-first, distraction-aware logger to track how you actually spend your dev hours.  
> No fluff. No fake time. Just raw focus data.

---

## 🧠 Why?

You're coding. Then you're not. Then you're scrolling docs. Then... YouTube.

**DevLogger** helps you:
- Log *what mode you're in* (Learn, Build, Explore, Grind, Offtrack)
- Track *when you drift*
- Get *honest data* about how your dev time is really spent
- Build accountability — even if you're solo

---

## ⚙️ Features

- ✅ Mode-based time logging (`Build`, `Learn`, `Explore`, `Grind`, `Offtrack`)
- ✅ Start/stop sessions manually
- ✅ Logs duration, timestamps, and mode
- ✅ Detects tab switches / inactivity / app changes *(optional)*
- ✅ Simple, clean UI built with React
- ✅ Local storage — your data stays with you

---

## 📦 Tech Stack

- Frontend: React + Tailwind
- Backend/Manager: Node.js (with optional Electron)
- Logging Core: `LogManager` class
- Optional: `active-win` to detect current app (VS Code, Chrome, etc.)

---

## 🚀 Getting Started

### 1. Clone this repo
```bash
git clone https://github.com/yourusername/dev-logger.git
cd dev-logger
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the dev app
```bash
npm run dev
```

---

## 🧪 Modes You Can Track

| Mode     | Purpose                       |
|----------|-------------------------------|
| Build    | Making something               |
| Learn    | Reading, courses, theory       |
| Explore  | API docs, tech articles        |
| Grind    | DSA, C, hard-focus deep work   |
| Offtrack | Distractions, surfing, etc.    |

---

## 🔌 Optional System Features

- **Auto-pause on inactivity** (no mouse/keyboard for X mins)
- **Auto-switch to Offtrack** when YouTube, Netflix, etc. are active
- **App-based mode switching** using `active-win` (e.g., Code = Build)

Coming soon via Electron version.

---

## 📁 Logs Format

```json
[
  {
    "mode": "Build",
    "startTime": "14:02",
    "endTime": "14:37",
    "duration": 35
  },
  ...
]
```

---

## 🛠️ Contributing

Open source. No fluff.

Want to add:
- Dark mode UI
- CLI tool
- GitHub activity tracking
- Cloud sync

→ open an issue or PR!

---

## 🧊 License

MIT — do whatever. Just don't fake your logs.

---

## ✨ Inspiration

Made by a dev who wanted to know if they were actually building — or just pretending.

```
