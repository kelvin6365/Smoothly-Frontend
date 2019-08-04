import React, { Component } from 'react';
import { Form, Grid, Message } from 'semantic-ui-react';
import LoginMutation from '../LoginMutation/index';
import './index.scss';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			usernameError: false,
			passwordError: false,
			loginLoading: false,
			incorrectUser: false
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
			this.setState({
				loginLoading: true,
				incorrectUser: false
			});
			//pass login query
			const loginData = {
				username: username,
				password: password
			};
			const result = (response, error) => {
				console.log(response, error);
				var success = !error && response != null ? true : false;
				if (success) {
					//success
					localStorage.setItem('_token', response.login.access_token);
					localStorage.setItem('_retoken', response.login.refresh_token);
					this.props.login();
					this.props.history.push('/');
				} else {
					//Fail
					//server error?
					//account not match??
					var incorrectUser =
						error.source.errors[0].message.indexOf('The user credentials were incorrect.') != -1
							? true
							: false;
					if (incorrectUser) {
						console.log('Error: incorrect User');
					}
					this.setState({
						loginLoading: false,
						incorrectUser: incorrectUser
					});
				}
			};
			LoginMutation(loginData, result);
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
		const { username, password, usernameError, passwordError, loginLoading, incorrectUser } = this.state;
		return (
			<div style={{ maxWidth: '650px' }} className="column login_form">
				<Grid>
					<Grid.Row columns={2} only="computer tablet">
						<Grid.Column>
							<div className="login_left_box">123</div>
						</Grid.Column>
						<Grid.Column>
							<Form onSubmit={this.handleSubmit}>
								<div className="login_right_box">
									<Form.Input
										error={usernameError}
										placeholder="UserName"
										name="username"
										value={username}
										onChange={this.handleChange}
										disabled={loginLoading}
									/>
									<Form.Input
										error={passwordError}
										placeholder="Password"
										name="password"
										value={password}
										onChange={this.handleChange}
										disabled={loginLoading}
									/>
									{incorrectUser && (
										<Message negative content="Sorry, there is no match user, Please try again." />
									)}
									<Form.Button content="Submit" loading={loginLoading} />
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
