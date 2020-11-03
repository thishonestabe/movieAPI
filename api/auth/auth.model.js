const Joi = require('joi');

const registerValidation = (val) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(8)
    })

    const {error} = schema.validate(val);
    return error
}
const loginValidation = (val) => {
    const schema = Joi.object({

        email: Joi.string().required().email(),
        password: Joi.string().required().min(8)
    })

    const {error} = schema.validate(val);
    return error
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;