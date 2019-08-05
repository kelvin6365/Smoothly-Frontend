import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import './index.scss';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = { activeItem: 'home' };
	}
	render() {
		const { activeItem } = this.state;
		return (
			<div className="dashboard">
				<Menu pointing secondary vertical>
					<Menu.Item name="Dashboard" as={NavLink} exact to="/dashboard" />
					<Menu.Item name="messages" as={NavLink} exact to="/pag2" />
					<Menu.Item name="friends" as={NavLink} exact to="/pag3" />
				</Menu>
				<div className="body">
					<div className="content">
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
