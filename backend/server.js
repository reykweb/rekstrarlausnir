import  express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV || 'debugging';

app.listen(PORT, console.log(`Server running in ${ENVIROMENT} mode on port ${PORT}...`));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id); 
  res.json(product);
});