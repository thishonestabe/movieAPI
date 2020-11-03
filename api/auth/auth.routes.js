const express = require('express');
const router = express.Router();
const User = require('../users/users.model');
const Validations = require('../auth/auth.model');
const bcrypt = require('bcryptjs');

//register
router.post('/register', async (req, res) => {

    let error = Validations.registerValidation(req.body);
    let checkEmail = await User.findOne({email: req.body.email});
    if (checkEmail) return res.status(400).send('Email Already exists');
    if(!error) {

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })
        try {
            const savedUser = await user.save();
            res.json({user:savedUser.name});
        }catch (e) {
            res.status(400).send(e);
        }
    } else {
        res.status(400).send(error);
    }

});
//login
router.post('/login',async (req, res) => {
    let error = Validations.loginValidation(req.body);
    if(error) return res.status(400).send(error);
    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email doesnt exist');
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) return res.status(400).send('Invalid password')

    res.send('Logged In Succesfully')
});



module.exports = router;