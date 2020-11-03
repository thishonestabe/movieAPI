const express = require('express');
const router = express.Router();
const { orderSchema } = require('./orders.model')
//get all orders.
router.get('/getorders', async (req, res) => {
    try {
        const orders = await orderSchema.find();
        res.json(orders);
    }catch (err) {
        res.json({message: err})
    }
});
//get order by id.
router.get('/getorderbyid/:id', async (req, res) => {
    try {
        const orders = await orderSchema.findById(req.body.id);
        res.json(orders);
    }catch (err) {
        res.json({message: err})
    }
});
//get own order..
router.get('/getownorder',) //skjf
//filter orders by.
router.get('/filterorders',); //skjf
//create a order.
router.put('/createorder',);
//edit a order.
router.patch('/editorder/:id',);
//delete a order.
router.delete('/deleteorder/:id',);

module.exports = router;