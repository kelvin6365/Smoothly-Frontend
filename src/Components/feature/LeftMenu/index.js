import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { leftMenuOpen } = this.props;
		return (
			<Menu pointing secondary vertical className={`animated fadeInRight ${leftMenuOpen ? 'open' : 'close'}`}>
				<div className="header">
					<img src={'./assets/images/Logo.svg'} />
					<div className="title">Smoothly</div>
				</div>
				<a className="item" onClick={() => this.props.openLeftMenu()}>
					<Icon name="bars" />
					<span className="menu_item ">Menu</span>
				</a>
				<NavLink className="item" to="/dashboard">
					<Icon name="user" />
					<span className="menu_item ">Dashboard</span>
				</NavLink>
				<NavLink className="item" to="/fortest">
					<Icon name="lock" />
					<span className="menu_item ">Fortest</span>
				</NavLink>
				<NavLink className="item" to="/pag2">
					<Icon name="lock" />
					<span className="menu_item ">Pag2</span>
				</NavLink>

				<NavLink className="item" to="/pag3">
					<Icon name="lock" />
					<span className="menu_item ">Pag3</span>
				</NavLink>

				<NavLink className="item" to="/pag4/1">
					<Icon name="lock" />
					<span className="menu_item ">Pag4</span>
				</NavLink>
			</Menu>
		);
	}
}

export default index;
