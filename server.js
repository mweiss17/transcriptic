/*jslint node: true */
'use strict';

// Declare variables used
var express, require, scraper, bodyParser, app, url;
express = require('express');
bodyParser = require('body-parser')
app = express()
url = require('url');
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
app.get('/zoom-levels', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
         '0': {width: 625,    height: 625},
         '1': {width: 1250,   height: 1250},
         '2': {width: 2500,   height: 2500},
         '3': {width: 5000,   height: 5000},
         '4': {width: 10000,  height: 10000}
       }));
});
app.get('/tile', function(req, res){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	console.log(query.height);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(query));
})

app.listen(app.get('port'), function(req, res) {
 console.log('Server listening at ' + app.get('port'));
});