const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    createProduct
} = require('../controllers/product.controller');
const { authenticate } = require('../../middleware/auth');

router
    .route('/')
    .get(authenticate, getAllProducts)
    .post(authenticate, createProduct);

router
    .route('/:id')
    .get(authenticate, getProductById);

router
    .route('/category/:category')
    .get(authenticate, getProductsByCategory);


module.exports = router;