// requestRoutes.js

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/RequestController');

// Create a new request
router.post('/api/creat', requestController.createBatchRequests);

// Get all requests
router.get('/getAll', requestController.getAllRequests);

// Get a specific request by ID
router.get('/getRequest/:id', requestController.getRequestById);

// Update a request by ID (approve or deny)
router.put('/update/:id', requestController.updateRequest);

// Delete a request by ID
router.delete('/remove/:id', requestController.deleteRequest);

module.exports = router;
