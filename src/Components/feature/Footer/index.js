import React, { Component } from "react";
import "./index.scss";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear()
    };
  }
  render() {
    const { currentYear } = this.state;
    const { t } = this.props;
    return (
      <footer className="footer">
        Copyright &copy; {currentYear}, {t("App Name")}. All Rights Reserved
      </footer>
    );
  }
}

export default index;
