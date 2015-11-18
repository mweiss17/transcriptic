/*jslint node: true */
'use strict';

// Declare variables used
var express, require, scraper, bodyParser, app;
express = require('express');
bodyParser = require('body-parser')
app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//Landing Page Templating
app.set('views', __dirname);
app.set('view engine', 'hbs'); 
app.set('port', 8081); 
app.use(express.static('scraper/images'));

//routes
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(app.get('port'), function(req, res) {
 console.log('Server listening at ' + app.get('port'));
});