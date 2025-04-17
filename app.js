// Import Modules 
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000; 

app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (HTML, JS, CSS)

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

// Route to update a player's HP
app.post('/update-player', (req, res) => {
    const { id, newHp } = req.body;
    const query = 'UPDATE players SET hp = ? WHERE id = ?';

    db.run(query, [newHp, id], function(err) {
        if (err) {
            res.status(500).send({ error: err.message});
            return;
        }
        res.send({ message: 'Player HP updated successfully'})
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
