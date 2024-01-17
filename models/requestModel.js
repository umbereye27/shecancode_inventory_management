const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantityRequested: {
            type: Number,
            required: true
        },
        productName: {
            type: String,
        }
    }],
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Denied'],
        default: 'Pending'
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
