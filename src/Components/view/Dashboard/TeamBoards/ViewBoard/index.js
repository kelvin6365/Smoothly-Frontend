import React, { Component } from "react";
import { matchRoutes } from "react-router-config";
import routes from "../../../../Function/Router";
import sections from "../../../../Function/MatchBreadcrumb";

import { Breadcrumb } from "semantic-ui-react";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const matchedRoutes = matchRoutes(routes, this.props.location.pathname);
    const props = matchedRoutes[matchedRoutes.length - 1];
    console.log(
      "[View Board Layout]",
      this.props,
      props,
      matchedRoutes,
      sections(matchedRoutes)
    );
    return (
      <>
        <div className="page-header" id="jobs">
          <Breadcrumb
            icon="right angle"
            sections={sections(matchedRoutes, props.match.params.board_id)}
          />
        </div>
        <div className="page-content" id="view-board">
          {props.match.params.board_id}
        </div>
      </>
    );
  }
}

export default index;
