const express = require('express');
const router = express.Router();
const User = require('./users.model');
//get all users.
router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch (err) {
        res.json({message: err})
    }
});
//get user by id.
router.get('/getuserbyid/:id', async (req, res) => {
    try {
        const user = await User.findById(req.body.id);
        res.json(user);
    }catch (err) {
        res.json({message: err})
    }
});

//edit a user.
router.patch('/edituser/:id', async (req, res) => {
    let updatefields = {}
    for( const property in req.body) {
        updatefields[property] = req.body[property];
    }

    try {
        const user = await User.updateOne({_id:req.params.id}, {
            $set: updatefields
        });
        res.json(user);
    }catch (err) {
        res.json({message: err})
    }
});
//delete a user.
router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const user = await User.deleteOne({_id:req.params.id});
        res.json(user);
    }catch (err) {
        res.json({message: err})
    }
});


module.exports = router;