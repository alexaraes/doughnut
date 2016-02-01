var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="projects">
				<div className="container">
					<div className="left-col">
						<a href="./eatie/eatie-index.html">
							<h2>Eatie</h2>
							<h3>Iron Yard final project - July 2015</h3>
						</a>
						<p>
							<a href="https://github.com/alexaraes/eatie">Source code</a><br />
					 		CSS3, HTML5, Backbone.js, React.js, Parse
						</p>
					</div>
					<div className="right-col">
						<a href="./eatie/eatie-index.html">
							<img src="./images/eatie-screencap.png" />
						</a>
					</div>
				</div>
				<div className="container">
					<div className="left-col">
						<a href="./photo-album/dist/photo-home.html">
							<h2>Photo Album</h2>
							<h3>Album of my favorite photos - June 2015</h3>
						</a>
						<p>
							<a href="https://github.com/alexaraes/photo-album-page/tree/master/dist">Source code</a><br />
							CSS3, HTML5, Backbone.js, React.js
						</p>
					</div>
					<div className="right-col">
						<a href="./photo-album/dist/photo-home.html">
							<img src="./images/album-screencap.png" />
						</a>
					</div>
				</div>
				<div className="container">
					<div className="left-col">
						<a href="./blog/blog-home.html">
							<h2>Blog</h2>
							<h3>Fun blog of various posts from various people</h3>
						</a>
						<p>
							<a href="https://github.com/alexaraes/blog-practice">Source code</a><br />
							CSS3, HTML5, Backbone.js, React.js, Parse
						</p>
					</div>
					<div className="right-col">
						<a href="./blog/blog-home.html">
							<img src="./images/blog-screencap.png" />
						</a>
					</div>
				</div>
			</div>
		);
	}
});