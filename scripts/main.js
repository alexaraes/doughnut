var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var HomeComponent = require('./components/HomeComponent.js');
var AboutComponent = require('./components/AboutComponent.js');
var ContactComponent = require('./components/ContactComponent.js');
var NavBar = require('./components/NavComponent.js');

var container = document.getElementById('main');
var nav = document.getElementById('nav');

var hash = window.location.hash;

// ReactDOM.render(
// 	<NavBar />,
// 	nav
// )

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
			<AboutComponent />,
			container
		)
	},
	contact: function() {
		ReactDOM.render(
			<ContactComponent />,
			container
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