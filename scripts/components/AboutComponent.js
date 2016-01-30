var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="about-hero"><h2 className="about-info">About</h2></div>
				<div className="container">
					<div className="about-info">
						<h2>Hello</h2>
						<h3>Is it me youre looking for?</h3>
					</div>
				</div>
			</div>
		);
	}
});