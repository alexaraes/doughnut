var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>

				<div className="contact-hero"><h2 className="contact-info">Contact Me</h2></div>

				<div className="container">
					<div>
						<a href="http://www.linkedin.com/in/alexaraes">
							<h2>Linked In</h2>
							<img src="../images/linkedin.png" />
						</a>
					</div>
				</div>

			</div>
		);
	}
});