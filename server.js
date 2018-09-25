//server.js contains protocols to create and boot backend server
 var express = require('express'),
 	app = express(),
 	port = process.env.PORT || 8000,
 	mongoose = require('mongoose'),
 	Contact = require('./src/models/contact'),
 	Routes = require('./src/routes/contactlist'),
 	bodyparser = require('body-parser'),
 	options = {
 		useNewUrlParser: true
 	}

 mongoose.Promise = global.Promise;

 //connects to database
 mongoose.connect("mongodb://localhost:27017/ContactDB", options).then(() => {
 	console.log('Connected to database');
 }).catch((error) => {
 	console.log(error)
 })

 app.use(bodyparser.urlencoded({extended: true}));
 app.use(bodyparser.json());

 app.use(function (req, res, next) {
 	res.setHeader('Access-Control-Allow-Origin', '*');
 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
 	res.setHeader('Access-Control-Allow-Credentials', true);
 	next();
 });

 Routes(app);
 //starts the server on specified port.
 app.listen(port);
 console.log('server is running on ' + port);