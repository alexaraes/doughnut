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
					<a href="./eatie/eatie-index.html">
						<div className="left-col">
							<h2>Eatie</h2>
							<h3>Iron Yard final project - July 2015</h3>
							<p>
								<a href="https://github.com/alexaraes/eatie">Source code</a><br />
						 		CSS3, HTML5, Backbone.js, React.js, Parse
							</p>
						</div>
						<div className="right-col">
							<img src="./images/eatie-screencap.png" />
						</div>
					</a>
				</div>
				<div className="container">
					<a href="./photo-album/dist/photo-home.html">
						<div className="left-col">
							<h2>Photo Album</h2>
							<h3>Album of my favorite photos - June 2015</h3>
							<p>
								<a href="https://github.com/alexaraes/photo-album-page/tree/master/dist">Source code</a><br />
								CSS3, HTML5, Backbone.js, React.js
							</p>
						</div>
						<div className="right-col">
							<img src="./images/album-screencap.png" />
						</div>
					</a>
				</div>
				<div className="container">
<<<<<<< HEAD
					<a href="/blog/index.html">
=======
					<a href="./blog/index.html">
>>>>>>> master
						<div className="left-col">
							<h2>Blog</h2>
							<h3>Fun blog of various posts from various people</h3>
							<p>
								<a href="https://github.com/alexaraes/blog-practice">Source code</a><br />
								CSS3, HTML5, Backbone.js, React.js, Parse
							</p>
						</div>
						<div className="right-col">
							<img src="./images/blog-screencap.png" />
						</div>
					</a>
				</div>
			</div>
		);
	}
});