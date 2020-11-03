const express = require('express');
const Movie = require("../movies/movies.model");
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
        const order = await orderSchema.findById(req.body.id);
        res.json(order);
    }catch (err) {
        res.json({message: err})
    }
});
//get own order..
router.get('/getownorder', async (req, res) => {
    try {
        const order = await orderSchema.findById(req.body.id);
        res.json(order);
    }catch (err) {
        res.json({message: err})
    }
})
//filter orders by.
router.get('/filterorders', async (req, res) => {
    let filter = {}
    for( const property in req.body) {
        filter[property] = req.body[property];
    }
    try {
        const orders = await orderSchema.find(filter);
        res.json(orders);
    }catch (err) {
        res.json({message: err})
    }
}); //skjf
//create a order.
router.put('/createorder', async (req, res) =>{
    console.log(req.body)
    const movie = await Movie.movieSchema.findById(req.body.movieId);
    const order = new orderSchema({
        movieId: req.body.userId,
        userId: req.body.userId ,
        movieTitle: movie.title,

    })
    try {
        const savedOrder = await order.save();
        const updatedMovie = await Movie.movieSchema.updateOne({_id:req.body.movieId}, {
            $set: {available: false}
        });
        res.json({order: savedOrder, updatedmovie: updatedMovie});
    } catch (err){
        res.json({message: err})
    }


});
//edit a order.
router.patch('/editorder/:id',);
//delete a order.
router.delete('/deleteorder/:id',);

module.exports = router;