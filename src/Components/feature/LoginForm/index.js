import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			usernameError: false,
			passwordError: false
		};
	}

	handleChange = (e, { name, value }) => {
		var usernameLength = name == 'username' ? value.length : this.state.username.length;
		var passwordLength = name == 'password' ? value.length : this.state.password.length;
		this.setState({
			[name]: value,
			usernameError: usernameLength != 0 ? false : true,
			passwordError: passwordLength != 0 ? false : true
		});
	};

	handleSubmit = () => {
		const { username, password } = this.state;

		console.log('Username:' + username + ' Password:' + password);
		//check username and password not null or empty

		if (username.length != 0 && password.length != 0) {
			//pass login query

			var success = true;
			if (success) {
				//success
				localStorage.setItem('_token', '1');
				this.props.login();
				this.props.history.push('/');
			} else {
				//Fail
				//server error?
				//account not match??
			}
		} else {
			var usernameVal = username.length != 0 ? false : true;
			var passwordVal = password.length != 0 ? false : true;
			this.setState({
				usernameError: usernameVal,
				passwordError: passwordVal
			});
		}
	};
	render() {
		const { username, password, usernameError, passwordError } = this.state;
		return (
			<div style={{ maxWidth: '650px' }} className="column">
				Login form
				<Grid>
					<Grid.Row columns={2} only="computer tablet">
						<Grid.Column>
							<div>123</div>
						</Grid.Column>
						<Grid.Column>
							<Form onSubmit={this.handleSubmit}>
								<div>
									<Form.Input
										error={usernameError}
										placeholder="UserName"
										name="username"
										value={username}
										onChange={this.handleChange}
									/>
									<Form.Input
										error={passwordError}
										placeholder="Password"
										name="password"
										value={password}
										onChange={this.handleChange}
									/>
									<Form.Button content="Submit" />
								</div>
							</Form>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={1} only="mobile">
						<Grid.Column>Mobile</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={1} only="mobile">
						<Grid.Column>Mobile</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default index;
