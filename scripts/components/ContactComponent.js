var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>

				<div className="contact-hero">
					<h2 className="contact-info">Contact Me</h2>
				</div>

				<div className="container">
					<div className="contact-left-col">
						<img className="contact-icon" src="./images/Email-icon.png" />
					</div>

					<div className="contact-right-col">
						<a className="text-link" href="mailto:alexa.schreffler@gmail.com">
							alexa.schreffler@gmail.com
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<a className="text-link" href="#linkedin">
							<img className="contact-icon" src="./images/linkedin-3-512.png" />
						</a>
					</div>
					<div className="contact-right-col">
						<a className="text-link" href="#linkedin">
							linkedin/in/alexaraes
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<a href="#github" target="_blank">
							<img className="contact-icon" src="./images/github-icon.png" />
						</a>
					</div>
					<div className="contact-right-col">
						<a className="text-link" href="#github">
							github.com/alexaraes
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<a href="#twitter">
							<img className="contact-icon" src="./images/twitter.png" />
						</a>
					</div>
					<div className="contact-right-col">
						<a className="text-link" href="#twitter">
							twitter.com/awrecksa
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<a href="#tumblr">
							<img className="contact-icon" src="./images/tumblr-6-512.png" />
						</a>
					</div>
					<div className="contact-right-col">
						<a className="text-link" href="#tumblr">
							awrecksa.tumblr.com
						</a>
					</div>
				</div>

			</div>
		);
	}
});