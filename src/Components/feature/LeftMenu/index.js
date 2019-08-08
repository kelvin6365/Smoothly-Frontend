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
			<Menu pointing secondary vertical className={leftMenuOpen ? '' : 'close'}>
				<div className="header">
					<img src={'./assets/images/Logo.svg'} />
					<div className="title">Smoothly</div>
				</div>
				<a className="item" onClick={() => this.props.openLeftMenu()}>
					<Icon name="bars" />
					<span className="menu_item animated zoomIn">Menu</span>
				</a>
				<NavLink className="item" to="/dashboard">
					<Icon name="user" />
					<span className="menu_item animated zoomIn">Dashboard</span>
				</NavLink>
				<NavLink className="item" to="/pag2">
					<Icon name="lock" />
					<span className="menu_item animated zoomIn">Pag2</span>
				</NavLink>

				<NavLink className="item" to="/pag3">
					<Icon name="lock" />
					<span className="menu_item animated zoomIn">Pag3</span>
				</NavLink>
			</Menu>
		);
	}
}

export default index;
