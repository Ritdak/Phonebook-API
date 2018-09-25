 'use strict';
module.exports = function(app){
	var contactlist = require ('../controllers/contactfunctions');

	//contactlist Routes
	app.route('/contact')
	.get(contactlist.list_contacts)
	.post(contactlist.create_contact)

	app.route('/contact/:contactId')
	.get(contactlist.read_contact)
	.put(contactlist.update_contact)
	.delete(contactlist.delete_contact);
};
