/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false, Showdown: false*/

App = require("app");
showdown = new Showdown.converter();

module.exports = Ember.Handlebars.registerBoundHelper('markdown', function(value,options) {
	new Ember.Handlebars.SafeString showdown.makeHtml(input);
});