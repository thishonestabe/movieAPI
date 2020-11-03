const express = require('express');
const router = express.Router();
const Movie = require('./movies.model');

//get all movies.
router.get('/getmovies', async (req, res) => {
    try {
        const movies = await Movie.movieSchema.find();
        res.json(movies);
    }catch (err) {
        res.json({message: err})
    }
});
//get movie by id.
router.get('/getmoviebyid/:id',async (req, res) => {
    try {
        const movie = await Movie.movieSchema.findById(req.params.id);
        res.json(movie);
    }catch (err) {
        res.json({message: err})
    }
});
//filter movies by.
router.get('/filtermovies', async (req, res) => {
    let filter = {}
    for( const property in req.body) {
        filter[property] = req.body[property];
    }
    try {
        const movies = await Movie.movieSchema.find(filter);
        res.json(movies);
    }catch (err) {
        res.json({message: err})
    }
});
//create a movie.
router.post('/createmovie', async (req, res) =>{
    console.log(req.body)
    const movie = new Movie.movieSchema({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        director: req.body.director
    })
    try {
        const savedMovie = await movie.save();
        res.json(savedMovie);
    } catch (err){
        res.json({message: err})
    }


});
//edit a movie.
router.patch('/editmovie/:id', async (req, res) => {
    let updatefields = {}
    for( const property in req.body) {
        updatefields[property] = req.body[property];
    }

    try {
        const movie = await Movie.movieSchema.updateOne({_id:req.params.id}, {
            $set: updatefields
        });
        res.json(movie);
    }catch (err) {
        res.json({message: err})
    }
});
//delete a movie.
router.delete('/deletemovie/:id', async (req, res) => {
    try {
        const movie = await Movie.movieSchema.deleteOne({_id:req.params.id});
        res.json(movie);
    }catch (err) {
        res.json({message: err})
    }
});

module.exports = router;