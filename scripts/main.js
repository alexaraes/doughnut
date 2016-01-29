var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var HomeComponent = require('./components/HomeComponent.js');

var container = document.getElementById('main');

var App = Backbone.Router.extend({
	routes: {
		'': 'home',
		'home': 'home',
		'about': 'about',
		'contact': 'contact',
		'blog': 'blog',
		'eatie': 'eatie',
		'images': 'images'
	},
	home: function(posts) {
		ReactDOM.render(
			<Home />, 
			container
		)
	},
	blog: function() {
		React.render(
			
		)
	},
	eatie: function() {
		React.render(
			
		)
	},
	images: function() {
		React.render(
			
		)
	}
});

var myApp = new App();
Backbone.history.start();