const express = require('express');
const router = express.Router();

//get all users.
router.get('/getusers',);
//get user by id.
router.get('/getuserbyid/:id',);
//create a user.
router.put('/createuser/',);
//edit a user.
router.patch('/edituser/:id',);
//delete a user.
router.delete('/deleteuser/:id',);


module.exports = router;