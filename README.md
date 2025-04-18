# 🐉 DnD Combat Tracker

A web-based Dungeons & Dragons initiative tracker and HP manager for players and monsters. <br> Built using HTML, CSS, JavaScript (frontend), Node.js with Express (backend), and SQLite for persistent data storage.

---

## 📂 Features

- Track initiative order and manage turns
- Add/remove characters (players and monsters)
- Manage current/total HP for players and monsters
- Apply HP changes directly or increment/decrement
- Death save tracking for players (3 fails = death, 3 successes = stabilized)
- Action log to record events
- Persistent player data stored in SQLite
- Backend API to update and fetch player HP

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/dnd-combat-tracker.git
cd dnd-combat-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Initialize the database
```bash
node setup.js
```

### 4. Start the server
```bash
node app.js
```

## 📁 Project Structure
```graphql
dnd-combat-tracker/
├── public/
│   ├── DNDCombat.html       # Main HTML UI
│   ├── styles.css           # Optional styling
│   └── player_management.js # UI interactivity & logic
├── setup.js                 # Initializes and seeds the SQLite database
├── app.js                   # Express server with API routes
├── players.db               # SQLite database file (created after running setup)
├── package.json             # Node.js project file
└── README.md                # This file!
```

## 🧠 Notes
- Customize players in setup.js or add your own via the frontend after setup.
- Future ideas: monster database, initiative auto-sort, death saves tracking UI, sound effects for DM drama. 🎭
- Works offline — ideal for in-person sessions!
