import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
//image
import logo from "../../../assets/images/Logo.svg";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { leftMenuOpen } = this.props;
    return (
      <Menu
        pointing
        secondary
        vertical
        className={`animated fadeInRight ${leftMenuOpen ? "open" : "close"}`}
      >
        <div className="header">
          <img src={logo} />
          <div className="title">Smoothly</div>
        </div>
        <a className="item" onClick={() => this.props.openLeftMenu()}>
          <Icon name="bars" />
          <span className="menu_item ">Menu</span>
        </a>
        <NavLink className="item" to="/m/dashboard">
          <Icon name="user" />
          <span className="menu_item ">Dashboard</span>
        </NavLink>
        <NavLink className="item" to="/m/jobs">
          <Icon name="lock" />
          <span className="menu_item ">jobslist</span>
        </NavLink>
      </Menu>
    );
  }
}

export default index;
