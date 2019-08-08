import React, { Component } from 'react';
import LeftMenu from '../../feature/LeftMenu';
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
				<div className="body">
					<div className="content animated fadeInLeft">
						<Switch>
							<Route exact path="/dashboard" render={(props) => <div>123</div>} />
							<Route exact path="/pag2" render={(props) => <div>321</div>} />
							<Route exact path="/pag3" render={(props) => <div>456</div>} />
							<Redirect from="/" to="/dashboard" />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default index;
