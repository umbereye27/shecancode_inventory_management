const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Getting the report
router.get('/getReport', reportController.getReport);

// Getting the request report
router.get('/getRequestReport', reportController.getReports);

module.exports = router;
