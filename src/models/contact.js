 'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  
  var contact = new Schema({
      name: {
       	type: String, 
       	required: 'enter your name please!',
       	unique: true
       },
      number:{
       	type: Number,
       	required:'Enter your number please',
       	unique: true
       },
      email:{
       	type: String,
       	unique: true
       },
      image:{
       	type: String,
       }
  
  });

  module.exports = mongoose.model('contact', contact);