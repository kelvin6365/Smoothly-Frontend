import React, { Component } from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const sections = [
	{ key: 'Dashboard', content: 'Dashboard', as: NavLink, to: '/dashboard' },
	{ key: 'ForTest', content: 'ForTest', active: true }
];

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log('[App] Page:ForTest');
		return (
			<div id="fortest">
				<div className="page-header">
					<Breadcrumb icon="right angle" sections={sections} />
				</div>

				<div className="page-content">ForTest</div>
			</div>
		);
	}
}

export default index;
