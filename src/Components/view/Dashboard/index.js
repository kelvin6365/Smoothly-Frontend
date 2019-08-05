import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';
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
				<Menu pointing secondary vertical className="animated slideInLeft">
					<div className="header animated fadeInDown slow">
						<img src={Logo} />
						<div className="title">Smoothly</div>
					</div>
					<NavLink className="item animated fadeInDown slow" to="/dashboard">
						<Icon name="user" />Dashboard
					</NavLink>
					<NavLink className="item animated fadeInDown slow" to="/pag2">
						<Icon name="lock" />Pag2
					</NavLink>

					<NavLink className="item animated fadeInDown slow" to="/pag3">
						<Icon name="lock" />Pag3
					</NavLink>
				</Menu>
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
