const Product = require('../models/ProductModel');
const Request = require('../models/requestModel');

// Generate stock report
exports.getReport = async (req, res) => {
    try {
        const products = await Product.find();
        // You can format the data as needed for the report
        const reportData = products.map(product => ({
            productName: product.productName,
            quantity: product.quantity,
            pricePerUnit: product.pricePerUnit,
            description: product.description,
        }));

        // Send the report as JSON
        res.status(200).json({ message: "Product report generated successfully", reportData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Generate the report for the requested product
exports.getReports = async (req, res) => {
    try {
        const productRequestReport = await Request.find();
        const requestData = productRequestReport.map(request => ({
            product: request.product,
            productName: request.productName,
            quantityRequested: request.quantityRequested,
            status: request.status,
            description: request.description
        }));

        // Send the report as JSON
        res.status(200).json({ message: "Request report generated successfully", requestData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
