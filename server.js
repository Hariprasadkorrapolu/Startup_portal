const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "807473", // Add your MySQL password
    database: "startup_hub"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed!", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

// User Registration
app.post("/register", (req, res) => {
    const { name, email, password, role } = req.body;
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, password, role], (err, result) => {
        if (err) {
            res.status(500).json({ error: "Registration failed" });
        } else {
            res.status(201).json({ message: "User registered successfully" });
        }
    });
});

// User Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err || result.length === 0) {
            res.status(401).json({ error: "Invalid Credentials" });
        } else {
            res.status(200).json({ message: "Login successful", user: result[0] });
        }
    });
});

// Submit Startup
app.post("/submit-startup", (req, res) => {
    const { startupName, industry, description } = req.body;
    const sql = "INSERT INTO startups (name, industry, description) VALUES (?, ?, ?)";
    db.query(sql, [startupName, industry, description], (err, result) => {
        if (err) {
            res.status(500).json({ error: "Startup submission failed" });
        } else {
            res.status(201).json({ message: "Startup submitted successfully" });
        }
    });
});

// Fetch Startups
app.get("/startups", (req, res) => {
    const sql = "SELECT * FROM startups";
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Failed to fetch startups" });
        } else {
            res.status(200).json(result);
        }
    });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
