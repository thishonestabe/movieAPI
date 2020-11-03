const mongoose = require('mongoose');
const Joi = require('joi');

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
    },
    orderStatus: {
        type: String,
        default: 'Open',
        required: true
    }
});
exports.orderSchema = mongoose.model('Order', OrderSchema);

const orderValidationSchema = (val) => {
    const schema = Joi.object({

        movieId: Joi.string().required(),
        userId: Joi.string().required(),
        movieTitle: Joi.string().required(),
    })

    const {error} = schema.validate(val);
    return error
}

exports.orderValidationSchema = orderValidationSchema;

