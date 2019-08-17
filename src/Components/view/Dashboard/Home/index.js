import React, { Component } from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const sections = [ { key: 'Dashboard', content: 'Dashboard', as: NavLink, to: '/dashboard' } ];

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log('[App] Page:Home');
		return (
			<div id="dashboard">
				<div className="page-header">
					<Breadcrumb icon="right angle" sections={sections} />
				</div>

				<div className="page-content">Dashboard</div>
			</div>
		);
	}
}

export default index;
