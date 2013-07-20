/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/
App = require("app");

module.exports = App.PostController = Ember.ObjectController.extend({
	isEditing: false,

	doneEditing: this.set('isEditing',false),
	
	edit: this.set('isEditing',true)
});