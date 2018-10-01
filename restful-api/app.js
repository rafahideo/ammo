const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:teste123@ds121955.mlab.com:21955/heroku_xmf9qgz4',
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRoutes = require('./api/routes/products');
app.use('/products', productRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;