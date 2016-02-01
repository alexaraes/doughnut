var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="about-hero"><h2 className="about-info">About</h2></div>
				<div className="container">
					<div className="about-info">
						<h2>What makes an Alexa?</h2>
						<h4>Combine one developer mom and one graphic designer dad, and an excitement for solving problems and making beautiful things.</h4>
						<p>
							Tabs > spaces forever. Matching color schemes for Sublime Text and iTerm. Die-hard Texan. A firm stance on the pronounciation of "gif". Singing Alanis Morissette at karaoke.
							Friends. Fire Eagle IPA. Bulleit rye bourbon. Cold brew coffee. 
						</p>
					</div>
				</div>
			</div>
		);
	}
});