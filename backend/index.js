const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/products');
const authRoutes =require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/api/auth', authRoutes);
app.listen(3001, () => console.log("Server running on http://localhost:3001"));
