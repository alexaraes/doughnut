var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>

				<h2 className="info">Contact Me</h2>

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