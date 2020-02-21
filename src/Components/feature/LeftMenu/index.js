import React, { Component } from "react";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LogoutMutation from "../LogoutMutation";
import "./index.scss";
//image
import logo from "../../../assets/images/Logo.svg";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("_user_data"))
    };
  }

  logout = () => {
    const result = callback => {
      console.log(callback);
      if (
        callback.logout.status == "TOKEN_REVOKED" &&
        callback.logout.message == "Your session has been terminated"
      ) {
        localStorage.removeItem("_user_data");
        localStorage.removeItem("_token");
        localStorage.removeItem("_retoken");

        this.props.history.push("/login");
      }
    };
    LogoutMutation(result);
  };

  render() {
    const { userData } = this.state;
    const { leftMenuOpen, t } = this.props;
    console.log("[Left Menu]", this.props);
    return (
      <Menu
        pointing
        secondary
        vertical
        className={`animated fadeInRight ${leftMenuOpen ? "open" : "close"}`}
      >
        <div className="header">
          <img
            src={logo}
            // onClick={() => this.props.i18n.changeLanguage("zh-Hk")}
          />
          <div className="title">{t("App Name")}</div>
        </div>
        <div className="items">
          <a className="item" onClick={() => this.props.openLeftMenu()}>
            <Icon name="bars" />
            <span className="menu_item">{t("Menu")}</span>
          </a>
          <NavLink className="item" to="/m/dashboard">
            <Icon name="user" />
            <span className="menu_item">{t("Dashboard")}</span>
          </NavLink>
          <NavLink className="item" to="/m/jobs">
            <Icon name="lock" />
            <span className="menu_item">jobslist</span>
          </NavLink>
        </div>
        <div className="footer">
          <Dropdown
            icon={null}
            trigger={
              <>
                <div className="user-icon">
                  <div className="message"></div>
                  <img
                    src={logo}
                    // onClick={() => this.props.i18n.changeLanguage("zh-Hk")}
                  />
                </div>
                <div className="user-info">
                  <div className="name">{userData.name}</div>
                  {/* {  <div className="title">{t("App Name")}</div>} */}
                </div>
              </>
            }
            pointing="top left"
            options={[
              {
                key: "user",
                text: "Account",
                icon: "user",
                selected: false,
                className: "add"
              },
              {
                key: "settings",
                text: "Settings",
                icon: "settings",
                selected: false,
                className: "add"
              },
              {
                key: "sign-out",
                text: "Sign Out",
                icon: "sign out",
                onClick: this.logout,
                selected: false,
                className: "add"
              }
            ]}
          />
        </div>
      </Menu>
    );
  }
}

export default index;
