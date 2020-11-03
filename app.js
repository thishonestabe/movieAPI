const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
//const errorController = require('./controllers/error');

let port = process.env.PORT || 3000;

const app = express();



mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log('conected to db');
})

const moviesRouter = require('./api/movies/movies.routes');
const ordersRouter = require('./api/orders/orders.routes');
const usersRouter = require('./api/users/users.routes');
app.use(cors());
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

