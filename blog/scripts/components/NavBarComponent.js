var React = require('react');

module.exports = React.createClass({
	componentWillMount: function () {
	    this.props.user.on('change', function() {
	    	
	    	this.forceUpdate();
	    	console.log('update check');

	    }, this);
	},
	render: function() {
		console.log('render nav', this.props.user);
		var loggedInNav = null;
		var links = [];
		
		if(!this.props.user.id) {
			links.push(<div className="linkDiv"><a href="#home">Posts </a></div>);
			links.push(<div className="linkDiv"><a href="#register"> Register </a></div>);
			links.push(<div className="linkDiv"><a href="#login"> Login</a></div>);
		}
		if (this.props.user.id) {
			links.push(<div className="linkDiv"><a href="#submitpost"> Write </a></div>);
			links.push(<div className="linkDiv"><a href="#home"> Read </a></div>);
			links.push(<div className="linkDiv"><a href="#" onClick={this.onLogOut}> Log out</a></div>);
		}
		return (
			<nav className="nav">
				<div>{links}</div>
			</nav>
		);
	},
	onLogOut: function() {
		this.props.user.logout();
	}
});