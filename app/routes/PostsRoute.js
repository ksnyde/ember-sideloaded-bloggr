/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/
App = require("app");

module.exports = App.PostsRoute = Ember.Route.extend({
  
	model: function() {
		return App.Posts.find();
	}
  
});
