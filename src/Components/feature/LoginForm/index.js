import React, { Component } from 'react';
import { Form, Grid, Message, Input, Header, Checkbox } from 'semantic-ui-react';
import LoginMutation from '../LoginMutation/index';
import Logo from '../../../assets/images/Logo.svg';
import './index.scss';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			remember_me: '',
			usernameError: false,
			passwordError: false,
			loginLoading: false,
			incorrectUser: false
		};
	}

	handleChange = (e, { name, value, checked }) => {
		var usernameLength = name == 'username' ? value.length : this.state.username.length;
		var passwordLength = name == 'password' ? value.length : this.state.password.length;
		console.log(checked, name, value);
		this.setState({
			[name]: name == 'remember_me' ? checked : value,
			usernameError: usernameLength == 0 ? true : false,
			passwordError: passwordLength == 0 ? true : false,
			incorrectUser: false
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
		const {
			username,
			password,
			remember_me,
			usernameError,
			passwordError,
			loginLoading,
			incorrectUser
		} = this.state;
		return (
			<div style={{ maxWidth: '650px' }} className="column login_form">
				<Grid className="computer only tablet only">
					<Grid.Row columns={2} only="computer tablet">
						<Grid.Column>
							<div className="login_left_box">
								<img src={Logo} />
								<Header as="h2">
									Smoothly
									<Header.Subheader>Make Your Job Easier</Header.Subheader>
								</Header>
							</div>
						</Grid.Column>
						<Grid.Column>
							<Form onSubmit={this.handleSubmit}>
								<div className="login_right_box">
									<Header as="h1">User Login</Header>
									<Input
										icon="user"
										iconPosition="left"
										error={usernameError}
										placeholder="UserName"
										name="username"
										value={username}
										onChange={this.handleChange}
										disabled={loginLoading}
									/>
									<Input
										icon="lock"
										type="password"
										iconPosition="left"
										error={passwordError}
										placeholder="Password"
										name="password"
										value={password}
										onChange={this.handleChange}
										disabled={loginLoading}
									/>
									<Form.Field>
										<Checkbox
											label={{ children: 'Remember me?' }}
											name="remember_me"
											onChange={this.handleChange}
										/>
									</Form.Field>
									{incorrectUser && (
										<Message negative content="Sorry, there is no match user, Please try again." />
									)}
									<Form.Button content="Login" primary loading={loginLoading} />
								</div>
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Grid className="mobile only">
					<div className="bg">
						<Grid.Row columns={1} only="mobile">
							<Grid.Column>
								<div className="login_left_box">
									<img src={Logo} />
									<Header as="h2">Smoothly</Header>
								</div>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={1} only="mobile">
							<Grid.Column>
								<Form onSubmit={this.handleSubmit}>
									<div className="login_right_box">
										<Header as="h1">User Login</Header>
										<Input
											icon="user"
											iconPosition="left"
											error={usernameError}
											placeholder="UserName"
											name="username"
											value={username}
											onChange={this.handleChange}
											disabled={loginLoading}
										/>
										<Input
											icon="lock"
											type="password"
											iconPosition="left"
											error={passwordError}
											placeholder="Password"
											name="password"
											value={password}
											onChange={this.handleChange}
											disabled={loginLoading}
										/>
										<Form.Field>
											<Checkbox
												label={{ children: 'Remember me?' }}
												name="remember_me"
												onChange={this.handleChange}
											/>
										</Form.Field>
										{incorrectUser && (
											<Message
												negative
												content="Sorry, there is no match user, Please try again."
											/>
										)}
										<Form.Button content="Login" primary loading={loginLoading} />
									</div>
								</Form>
							</Grid.Column>
						</Grid.Row>
					</div>
				</Grid>
			</div>
		);
	}
}

export default index;
