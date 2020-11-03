const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const errorController = require('./controllers/error');

let port = process.env.PORT || 3000;

const app = express();



mongoose.connect('mongodb+srv://abraham:movie2020@cluster0.ln89w.mongodb.net/movieproject?retryWrites=true&w=majority', () => {
    console.log('conected to db');
})

const moviesRouter = require('./api/movies/movies.routes');
const ordersRouter = require('./api/orders/orders.routes');
const usersRouter = require('./api/users/users.routes');

app.use(bodyParser.urlencoded({ extended: false }));


//app.use('/', indexRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/orders',ordersRouter);
app.use('/api/users', usersRouter);
//
//
// app.use(errorController.get404);
//
// app.use(errorController.handdleError)

app.listen(port);

