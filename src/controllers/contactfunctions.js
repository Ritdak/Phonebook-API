'use strict';
 
 var mongoose = require('mongoose'),
   contact = mongoose.model('contact');

   exports.list_contacts = function(req, res){
   	 contact.find({}, function(err, contact){
   	 	if (err) {
   	 		res.send(err);
   	 	}
	 	res.json(contact);
   	 });
   };

   exports.create_contact = function(req, res){
   	 var new_contact = new contact(req.body);
   	 new_contact.save(function(err, contact){
   	 	if (err){
   	 		res.send(err);
   	 	}
   	 	res.json(contact);
   	 });
   };

   exports.read_contact = function(req, res){
   	 contact.findById(req.params.contactId, function(err, contact){
   	 	if (err){
   	 		res.send(err);
   	 	}
   	 	res.json(contact);
   	 });
   };

   exports.update_contact = function(req, res){
   	contact.findOneAndUpdate({_id: req.params.contactId},req.body, {new: true}, function(err, contact){
   		if (err){
   			res.send(err);
   		}
   		res.json(contact);
   	});
   };

   exports.delete_contact = function(req, res){
   	contact.remove({
   		_id: req.params.contactId
   	}, function(err,contact){
   		if (err){
   			res.send(err);
   		}
   		res.json({ message: 'contact successfully deleted'});
   	});
   };