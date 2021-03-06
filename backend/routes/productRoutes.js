import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
const router = express.Router();


// @desc Get all products
// @route GET /api/v1/products
// @access Public
router.get('/', asyncHandler(async  (req, res) => {
  const products = await Product.find({})
  res.json(products);
}));

// Get one single product
// @route GET /api/v1/products/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Vara fannst ekki');
    }
}));


export default router;