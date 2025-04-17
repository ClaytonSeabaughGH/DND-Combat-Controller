// Import Modules 
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000; 

app.use(express.json()); // Parse JSON request bodies
app.use(express.static('public')); // Serve static files (HTML, JS, CSS)

// Initialize Player SQLite database 
const db = new sqlite3.Database('players.db');

// Route to get player's data
app.get('/players', (req, res) => {
    db.all('SELECT * FROM players', [], (err, rows) => {
      if (err) {
        res.status(500).send({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });
  