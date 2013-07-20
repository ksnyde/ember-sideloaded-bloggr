/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/

// ===== Namespace =====
App = require ('app');

// ===== Router =====
App.Router.map(function() {

	this.resource('about');
	this.resource('posts', {
		this.resource('post',function() {path: ':post_id'});
	}); 
	
});

// ===== Routes =====
require ('routes/IndexRoute');
require ('routes/PostsRoute');

// ===== Store =====
App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'	
});

// ===== Models =====
require ('models/Post');

// ===== Fixtures =====
require ('fixtures/Post');

// ===== Views =====


// ===== Controllers =====
require ('controllers/PostController');

// ===== Template Helpers =====
require ('helpers/date');
require ('helpers/markdown');

// ===== Templates =====
require ('templates/application');
require ('templates/about');
require ('templates/posts');
require ('templates/posts/index');
require ('templates/post');
require ('templates/post/_edit');