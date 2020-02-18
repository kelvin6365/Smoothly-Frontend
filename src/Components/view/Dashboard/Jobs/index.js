import React, { Component } from "react";
import { Breadcrumb } from "semantic-ui-react";

import { matchRoutes } from "react-router-config";
import routes from "../../../Function/Router";
import sections from "../../../Function/MatchBreadcrumb";
// const sections = [
// 	{ key: 'Dashboard', content: 'Dashboard', as: NavLink, to: '/dashboard' },
// 	{ key: 'ForTest', content: 'ForTest', active: true }
// ];

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname);

    console.log("[App] Page:", matchedRoutes);
    return (
      <div id="fortest">
        <div className="page-header">
          <Breadcrumb icon="right angle" sections={sections(matchedRoutes)} />
        </div>

        <div className="page-content">Joblist</div>
      </div>
    );
  }
}

export default index;
