const express = require('express');
const router = express.Router();
const User = require('../users/users.model');
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8)
})

//register
router.post('/register', async (req, res) => {
    const {error} = schema.validate(req.body);

    if(!error) {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        try {
            const savedUser = await user.save();
            res.json(savedUser);
        }catch (e) {
            res.status(400).send(e);
        }
    } else {
        res.send(error);
    }

});
//login
router.post('/login/',);



module.exports = router;