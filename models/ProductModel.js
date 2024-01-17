
// productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    pricePerUnit: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0,
      },
    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

  