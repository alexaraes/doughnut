var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>

				<div className="contact-hero"><h2 className="contact-info">Contact Me</h2></div>

				<div className="container">
					<div className="left-col">
						<h2>Email</h2>
					</div>
					<div className="right-col">
						<a href="http://www.linkedin.com/in/alexaraes">
							<h3>alexa.schreffler@gmail.com</h3>
						</a>
					</div>
				</div>
				<div className="container">
					<div className="left-col">
						<h2>LinkedIn</h2>
					</div>
					<div className="right-col">
						<a href="http://www.linkedin.com/in/alexaraes">
							<h3>linkedin/in/alexaraes</h3>
						</a>
					</div>
				</div>
				<div className="container">
					<div className="left-col">
						<h2>GitHub</h2>
					</div>
					<div className="right-col">
						<a href="http://www.github.com/alexaraes">
							<h2>github.com/alexaraes</h2>
						</a>
					</div>
				</div>

			</div>
		);
	}
});