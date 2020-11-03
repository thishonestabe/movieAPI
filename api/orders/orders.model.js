const mongoose = require('mongoose');

OrderSchema = mongoose.Schema({
    movieId: {
        type:String,
        required: true
    },
    userId: {
        type:String,
        required: true
    },
    movieTitle: {
        type:String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    returnDate: {
        type: Date,
        default:  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
});
exports.orderSchema = mongoose.model('Order', OrderSchema);