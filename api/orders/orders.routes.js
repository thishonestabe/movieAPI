const express = require('express');
const router = express.Router();

//get all orders.
router.get('/getorders',);
//get order by id.
router.get('/getorderbyid/:id',);
//get own order..
router.get('/getownorder/',) //skjf
//filter orders by.
router.get('/filterorders/',); //skjf
//create a order.
router.put('/createorder/',);
//edit a order.
router.patch('/editorder/:id',);
//delete a order.
router.delete('/deleteorder/:id',);

module.exports = router;