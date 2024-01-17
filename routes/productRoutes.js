
const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// Create a new request
router.post('/create', productController.createProduct);

// Get all requests
router.get('/getAll', productController.getAllProducts);

// Get a specific request by ID
router.get('/get/:id', productController.getOneProduct);

// Update a request by ID (approve or deny)
router.put('/update/:id', productController.updateProduct);

// Delete a request by ID
router.delete('/remove/:id',productController.deleteProduct);

module.exports = router;