const express = require('express');
const router = express.Router();
const User = require('../users/users.model');

//register
router.post('/register', async (req, res) => {
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
});
//login
router.post('/login/',);



module.exports = router;