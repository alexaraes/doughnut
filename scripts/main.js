var React = require('react');
var ReactDOM = require('react-dom');
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
	home: function() {
		ReactDOM.render(
			<HomeComponent />, 
			container
		)
	},
	about: function() {
		ReactDOM.render(
			
		)
	},
	contact: function() {
		ReactDOM.render(
			
		)
	},
	blog: function() {
		ReactDOM.render(
			
		)
	},
	eatie: function() {
		ReactDOM.render(
			
		)
	},
	images: function() {
		ReactDOM.render(
			
		)
	}
});

var myApp = new App();
Backbone.history.start();