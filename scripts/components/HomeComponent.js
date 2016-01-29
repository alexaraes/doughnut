var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="hero">
					<h1 className="name">Alexa Rae Schreffler</h1>
				</div>
				<div className="container">
					<div className="left-col">
						<a href="./eatie/eatie-index.html"><h2>Eatie</h2></a>
						<h3>Iron Yard final project - July 2015</h3>
						<p>
							Single-page web app <br />
					 		CSS3, HTML5, Backbone.js, React.js, Parse
						</p>
					</div>
					<div className="right-col">
					</div>
				</div>
				<div className="container">
					<div className="left-col">
						<a href="./photo-album/dist/photo-home.html"><h2>Photo Album</h2></a>
						<h3>Album of my favorite photos - June 2015</h3>
						<p>
							CSS3, HTML5, Backbone.js, React.js
						</p>
					</div>
					<div className="right-col">
						
					</div>
				</div>
				<div className="container">
					<div className="left-col">
						<a href="./blog/blog-home.html"><h2>Blog</h2></a>
						<h3>Fun blog of various posts from various people</h3>
						<p>
							CSS3, HTML5, Backbone.js, React.js, Parse
						</p>
					</div>
					<div className="right-col">
						
					</div>
				</div>
			</div>
		);
	}
});