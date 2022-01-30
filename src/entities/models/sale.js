const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema(
    {
        product: {
            type: Object,
            required: true
        },
        date: {
            type: Date, 
            required: true
        }
    }
)
module.exports = mongoose.model('Sale', SaleSchema);