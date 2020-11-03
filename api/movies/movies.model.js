const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

MovieSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    year: {
        type:Number,
        required: true
    },
    genre: {
        type:String,
        required: true
    },
    director: {
        type:String,
        required: true
    },
});
exports.movieSchema = mongoose.model('Movie', MovieSchema);
//const Cart = require('./cart');

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'movies.json'
// );

const getMoviesFromFile = cb => {
    // fs.readFile(p, (err, fileContent) => {
    //     if (err) {
    //         cb([]);
    //     } else {
    //         cb(JSON.parse(fileContent.toString()));
    //     }
    // });
};

exports.Movie = class Movie {
    constructor(id, title, year, genre, director) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.director = director;
    }

    save() {


        // getMoviesFromFile(movies => {
        //     if (this.id) {
        //         const existingMovieIndex = movies.findIndex(m => m.id === this.id);
        //         const updatedMovies = [...movies];
        //         updatedMovies[existingMovieIndex] = this;
        //         fs.writeFile(p, JSON.stringify(updatedMovies), err => {
        //             console.log(err);
        //         });
        //     } else {
        //         this.id = Math.random().toString();
        //         movies.push(this);
        //         fs.writeFile(p, JSON.stringify(movies), err => {
        //             console.log(err);
        //         });
        //     }
        //
        // });
    }

    // static deleteById(id) {
    //     getMoviesFromFile(movies => {
    //         const movie = movies.find(m => m.id === id)
    //         const updatedMovies = movies.filter(m => m.id !== id);
    //         fs.writeFile(p, JSON.stringify(updatedMovies), err => {
    //             if(!err) {
    //                 Cart.deleteMovie(id, movie.price);
    //             }
    //
    //         })
    //
    //     })
    //
    // }

    static fetchAll(cb) {
        getMoviesFromFile(cb);
    }

    static findById(id, cb) {
        getMoviesFromFile(movies => {
            const movie = movies.find(m => m.id === id);
            cb(movie)
        })
    }
};