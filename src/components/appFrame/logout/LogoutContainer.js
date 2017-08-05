import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { deleteLocalStorageToken } from "lib/localStorageAPI";

import Logout from "components/appFrame/logout/Logout";

class LogoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoggedOut: false
    };
  }

  render() {
    return this.state.hasLoggedOut
      ? <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />
      : <Logout handleClick={this._handleLogout} />;
  }

  _handleLogout = () => {
    deleteLocalStorageToken();
    this.setState({ hasLoggedOut: true });
  };
}

export default LogoutContainer;
