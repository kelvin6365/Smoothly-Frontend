import React, { Component, Suspense } from 'react';
import './App.css';
import LoginPage from './Components/view/LoginPage';
import Dashboard from './Components/view/Dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loading: true,
			auth: localStorage.getItem('_token') ? true : false
		};
	}

	login = () => {
		console.log('Login auth true');
		this.setState({
			auth: true
		});
	};

	componentDidMount() {
		this.setState({
			Loading: false
		});
	}

	render() {
		const { Loading, auth } = this.state;
		if (Loading) return 'Loading';
		return (
			<Suspense fallback={<div>Loading</div>}>
				<div className="App">
					{auth ? (
						<Switch>
							<Route path="/" render={(props) => <Dashboard {...props} />} />
							<Redirect to="/" />
						</Switch>
					) : (
						<Switch>
							<Redirect from="/" to="/login" />
							<Route
								exact
								path="/login"
								render={(props) => <LoginPage {...props} login={this.login} />}
							/>
						</Switch>
					)}
				</div>
			</Suspense>
		);
	}
}

export default App;
