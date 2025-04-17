// Import Modules 
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000; 

app.use(express.json()); // Parse JSON request bodies
app.use(express.static('public')); // Serve static files (HTML, JS, CSS)

// Initialize Player SQLite database 
const db = new sqlite3.Database('players.db');


