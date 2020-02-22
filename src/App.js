import React, { Component, Suspense } from "react";
import "./App.css";
import routes from "./Components/Function/Router";
import { Translation } from "react-i18next";
import { renderRoutes } from "react-router-config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: true,
      auth: localStorage.getItem("_token") ? true : false
    };
  }

  login = () => {
    console.log("Login auth true");
    this.setState({
      auth: true
    });
  };

  componentDidMount() {
    this.setState({
      Loading: false
    });
  }

  render() {
    const { Loading, auth } = this.state;
    // if (Loading) return "Loading";
    return (
      <Suspense fallback={<div>Loading</div>}>
        <Translation>
          {(t, { i18n }) => {
            return (
              <div className="App">
                {/* {auth ? ( */}
                {renderRoutes(routes, {
                  ...this.props,
                  t: t,
                  i18n: i18n,
                  login: this.login
                })}

                {/* ) : (
                  <Switch>
                   
                  </Switch>
                )} */}
              </div>
            );
          }}
        </Translation>
      </Suspense>
    );
  }
}

export default App;
