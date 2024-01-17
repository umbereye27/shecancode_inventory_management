const Request = require('../models/requestModel');
const notificationService = require('../services/notificationService');

// Create multiple requests in a batch

exports.createBatchRequests = async (req, res) => {
    try {
        const batchRequests = req.body;

        // Validate the request format
        if (!Array.isArray(batchRequests)) {
            return res.status(400).json({ error: 'Invalid request format. Expecting an array of requests.' });
        }

        // Create an array to store the created requests
        const createdRequests = [];

        // Process each request in the batch
        for (const batchRequest of batchRequests) {
            const { products, description } = batchRequest;

            // Create individual request
            const createdRequest = await Request.create({
                products,
                description,
                status: 'Pending', // You may set a default status
                requestDate: new Date(), // Set the request date
            });

            // Add the created request to the array
            createdRequests.push(createdRequest);
        }

        // Notify the finance manager about the new batch of requests
        notificationService.notifyFinanceManager(createdRequests);

        res.status(201).json({ message: 'Batch requests created successfully', createdRequests });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRequestById = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRequest = async (req, res) => {
    try {
        const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRequest = async (req, res) => {
    try {
        await Request.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
