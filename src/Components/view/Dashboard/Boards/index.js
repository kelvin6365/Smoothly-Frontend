import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.location.pathname == "/m/boards") {
      this.props.history.push("/m/boards/all");
    }
  }
  render() {
    const { route } = this.props;
    console.log("[Boards Layout]", this.props);
    return renderRoutes(route.routes, { ...this.props });
  }
}

export default index;
