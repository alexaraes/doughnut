var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>

				<div className="contact-hero"><h2 className="contact-info">Contact Me</h2></div>

				<div className="container">
					<div className="contact-left-col">
						<img className="contact-icon" src="../images/Email-icon.png" />
					</div>
					<div className="contact-right-col">
						<a href="mailto:alexa.schreffler@gmail.com">
							alexa.schreffler@gmail.com
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<img className="contact-icon" src="../images/linkedin-3-512.png" />
					</div>
					<div className="contact-right-col">
						<a href="http://www.linkedin.com/in/alexaraes">
							linkedin/in/alexaraes
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<img className="contact-icon" src="../images/github-icon.png" />
					</div>
					<div className="contact-right-col">
						<a href="http://www.github.com/alexaraes">
							github.com/alexaraes
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<img className="contact-icon" src="../images/twitter.png" />
					</div>
					<div className="contact-right-col">
						<a href="http://www.twitter.com/awrecksa">
							twitter.com/awrecksa
						</a>
					</div>
				</div>
				<div className="container">
					<div className="contact-left-col">
						<img className="contact-icon" src="../images/tumblr-6-512.png" />
					</div>
					<div className="contact-right-col">
						<a href="awrecksa.tumblr.com">
							awrecksa.tumblr.com
						</a>
					</div>
				</div>

			</div>
		);
	}
});