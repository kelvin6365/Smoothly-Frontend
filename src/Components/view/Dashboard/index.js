import React, { Component } from "react";
import LeftMenu from "../../feature/LeftMenu";
import routes from "../../Function/Router";

import { Switch, Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "./index.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { leftMenuOpen: true };
  }

  openLeftMenu = () => {
    this.setState({
      leftMenuOpen: !this.state.leftMenuOpen
    });
  };

  render() {
    const { leftMenuOpen } = this.state;

    return (
      <div className="dashboard">
        <LeftMenu
          {...this.props}
          leftMenuOpen={leftMenuOpen}
          openLeftMenu={this.openLeftMenu}
        />
        <div className={leftMenuOpen ? "body open" : "body close"}>
          <div>top bar</div>
          <div className="content animated fadeInLeft">
            <Switch>{renderRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
