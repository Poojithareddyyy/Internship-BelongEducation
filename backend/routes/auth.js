const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [fullName, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'Signup successful' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// LOGIN ROUTE
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) {
      return res.status(404).json({ error: 'Account not found.Click on sign Up!' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect username or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { id: user.id, fullName: user.full_name, email: user.email } });
  });
});

module.exports = router;
