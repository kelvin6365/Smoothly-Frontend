import React, { Component } from "react";
import LeftMenu from "../../feature/LeftMenu";
import Footer from "../../feature/Footer";
import routes from "../../Function/Router";

import { Switch, Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "./index.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { leftMenuOpen: true, loading: true };
  }

  componentWillMount() {
    if (!localStorage.getItem("_token")) {
      this.props.history.push("/login");
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  openLeftMenu = () => {
    this.setState({
      leftMenuOpen: !this.state.leftMenuOpen
    });
  };

  render() {
    const { leftMenuOpen, loading } = this.state;
    console.log("[Dashboard Layout]", this.props);
    if (loading) {
      return <div>loading...</div>;
    }
    return (
      <div className="dashboard">
        <LeftMenu
          {...this.props}
          leftMenuOpen={leftMenuOpen}
          openLeftMenu={this.openLeftMenu}
        />
        <div className={leftMenuOpen ? "body open" : "body close"}>
          {/* <div>top bar</div> */}
          <div className="content animated fadeInLeft">
            <Switch>{renderRoutes(routes)}</Switch>
          </div>
          <Footer t={this.props.t} />
        </div>
      </div>
    );
  }
}

export default index;
