const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all products
router.get('/', (req, res) => {
  console.log('GET /products hit'); 
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      console.log('Products fetched:', results); // debugging
      res.json(results);
    }
  });
});

   

// CREATE product
router.post('/', (req, res) => {
  const { name, description, price, image } = req.body;
  db.query('INSERT INTO products SET ?', { name, description, price, image }, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Product added.");
  });
});

// UPDATE product
router.put('/:id', (req, res) => {
  db.query('UPDATE products SET ? WHERE id = ?', [req.body, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Product updated.");
  });
});

// DELETE product
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Product deleted.");
  });
});

module.exports = router;
