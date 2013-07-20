/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, moment: false*/

App = require("app");
Ember.Handlebars.registerBoundHelper('date', function(value) {
	return moment(value).fromNow();
});