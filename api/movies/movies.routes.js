const express = require('express');
const router = express.Router();

//get all movies.
router.get('/getmovies',);
//get movie by id.
router.get('/getmoviebyid/:id',);
//filter movies by.
router.get('/filtermovies/',);// skjf
//create a movie.
router.put('/createmovie/',);
//edit a movie.
router.patch('/editmovie/:id',);
//delete a movie.
router.delete('/deletemovie/:id',);

module.exports = router;