import React, { Component } from "react";
import { Breadcrumb } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import routes from "../../../Function/Router";
import sections from "../../../Function/MatchBreadcrumb";
// const sections = [
//   { key: "Dashboard", content: "Dashboard", as: NavLink, to: "/dashboard" }
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
      <>
        <div className="page-header">
          <Breadcrumb icon="right angle" sections={sections(matchedRoutes)} />
        </div>

        <div className="page-content">123</div>
      </>
    );
  }
}

export default index;
