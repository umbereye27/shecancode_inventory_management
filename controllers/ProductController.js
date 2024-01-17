// productController.js

const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');


// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { productName, quantity, pricePerUnit, description } = req.body;

        // Check if a product with the same productName already exists
        const existingProduct = await Product.findOne({ productName });

        if (existingProduct) {
            // If product already exists, return an error response
            return res.status(400).json({ error: 'Product with the same name already exists' });
        }

        // Calculate total price
        const totalPrice = quantity * pricePerUnit;

        // Create product with total price
        const product = await Product.create({ productName, quantity, pricePerUnit, description, totalPrice });
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({message: "all products in the stock displayed successfully",products});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific product by ID
exports.getOneProduct= async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({message :"getting one product is working properly",product});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const { productName, quantity, pricePerUnit, description } = req.body;

        // Calculate total price
        const totalPrice = quantity * pricePerUnit;

        // Update product with total price
        const product = await Product.findByIdAndUpdate(req.params.id, { productName, quantity, pricePerUnit, description, totalPrice }, { new: true });
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


