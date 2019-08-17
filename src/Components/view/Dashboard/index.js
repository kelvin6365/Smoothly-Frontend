import React, { Component } from 'react';
import LeftMenu from '../../feature/LeftMenu';
import Dashboard from './Home';
import ForTest from './ForTest';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: 'home', leftMenuOpen: true };
	}

	openLeftMenu = () => {
		this.setState({
			leftMenuOpen: !this.state.leftMenuOpen
		});
	};

	render() {
		const { activeItem, leftMenuOpen } = this.state;

		return (
			<div className="dashboard">
				<LeftMenu {...this.props} leftMenuOpen={leftMenuOpen} openLeftMenu={this.openLeftMenu} />
				<div className={leftMenuOpen ? 'body open' : 'body close'}>
					<div className="content animated fadeInLeft">
						<Switch>
							<Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
							<Route exact path="/fortest" render={(props) => <ForTest {...props} />} />
							<Route exact path="/pag2" render={(props) => <div>321</div>} />
							<Route exact path="/pag3" render={(props) => <div>456</div>} />
							<Route exact path="/pag4/:id" render={(props) => <div>456{props.match.params.id}</div>} />
							<Redirect to="/dashboard" />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
