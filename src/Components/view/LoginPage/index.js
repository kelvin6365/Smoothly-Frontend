import React, { Component } from "react";
import LoginForm from "../../feature/LoginForm";
import "./index.scss";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (localStorage.getItem("_token")) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div
        style={{ height: "100vh" }}
        className="ui center aligned middle aligned grid"
      >
        <LoginForm {...this.props} />
      </div>
    );
  }
}

export default index;
