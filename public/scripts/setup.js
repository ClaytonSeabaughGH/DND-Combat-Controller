// setup.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./players.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    hp INTEGER NOT NULL,
    hp_total INTEGER NOT NULL
  )`);

  const stmt = db.prepare("INSERT INTO players (name, hp, hp_total) VALUES (?, ?, ?)");
  stmt.run("Lysander", 20, 20);
  stmt.run("Azure", 17, 17);
  stmt.run("Lyra", 18, 18);
  stmt.run("Taylor", 13, 13);
  stmt.run("Zonk", 15, 15);
  stmt.finalize();

  console.log("Database initialized and sample players inserted.");
});


db.close();

