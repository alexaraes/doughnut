var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<ul>
				<li>
					<a className="navlinks" href="#home">home</a>
				</li>
				<li>
					<a className="navlinks" href="#projects">projects</a>
				</li>
				<li>
					<a className="navlinks" href="#about">about</a>
				</li>
				<li>
					<a className="navlinks" href="#contact">contact</a>
				</li>
			</ul>
		);
	}
});