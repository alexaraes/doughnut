var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<ul>
				<li>
					<a class="navlinks" href="#home">home</a>
				</li>
				<li>
					<a class="navlinks" href="#about">about</a>
				</li>
				<li>
					<a class="navlinks" href="#contact">contact</a>
				</li>
			</ul>
		);
	}
});