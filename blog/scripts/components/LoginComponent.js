var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors:{}
		}
	},
	render: function() {
		return (
			<div>
				<form type="submit" ref="regForm" className="loginForm" onSubmit={this.logIn}>
					<label>Username</label><br />
					<input type="text" ref="username" /><br />
					<div className="errorText">{this.state.errors.username}</div>
					<label>Password</label><br />
					<input type="password" ref="password" /><br />
					<div className="errorText">{this.state.errors.password}</div>
					<div className="errorText" ref="serverError"></div>
					<button type="submit">Login</button><br />
				</form>
			</div>
		);
	},
	logIn: function(e) {
		var that = this;
		var username = that.refs.username.getDOMNode().value;
		var password = that.refs.password.getDOMNode().value;

		var errors = {};

		e.preventDefault();

		if (username === '') {
			errors.username = 'Please enter your username.';
		}
		if (password === '') {
			errors.password = 'Please enter your password.';
		}

		that.setState({errors: errors});

		this.props.user.login(
			{			
			username: that.refs.username.getDOMNode().value,
			password: that.refs.password.getDOMNode().value
			}, 
			{
			    success: function(userModel) {
			        console.log('user was logged in');
			        that.props.myApp.navigate('submitpost', {trigger: true});
			    },
			    error: function(userModel, response) {
			    	that.refs.serverError.getDOMNode().innerHTML = 'Oops! Something went wrong.';
			        console.log('user was not logged in', response.responseJSON);
			    }
		});
	}
});