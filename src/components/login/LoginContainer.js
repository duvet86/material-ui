import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { Redirect } from "react-router-dom";

import { setLocalStorageToken } from "lib/localStorageAPI";
import { loginMutation } from "components/login/graphqlQueries";
import Login from "components/login/Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      isLoading: false,
      isAuthenticated: false,
      redirect: ""
    };
  }

  componentWillMount() {
    document.body.style.paddingTop = "40px";
    document.body.style.paddingBottom = "40px";
    document.body.style.backgroundColor = "#eee";
  }

  componentWillUnmount() {
    document.body.style.paddingTop = null;
    document.body.style.paddingBottom = null;
    document.body.style.backgroundColor = null;
  }

  render() {
    return this.state.isAuthenticated
      ? <Redirect
          to={{
            pathname: this.state.redirect,
            state: { from: this.props.location }
          }}
        />
      : <Login
          handleSubmit={this._handleSubmit}
          getEmailValidationState={this._getEmailValidationState}
          getPasswordValidationState={this._getPasswordValidationState}
          handleEmailChange={this._handleEmailChange}
          handlePasswordChange={this._handlePasswordChange}
          emailValue={this.state.email}
          passwordValue={this.state.password}
          errorMessage={this.state.errorMessage}
          isLoading={this.state.isLoading}
        />;
  }

  _getEmailValidationState = () => {
    if (this.state.errorMessage) return true;
    const length = this.state.email.length;
    if (length > 8) return false;
    else if (length > 0) return true;
  };

  _getPasswordValidationState = () => {
    if (this.state.errorMessage) return true;
    const length = this.state.password.length;
    if (length > 3) return false;
    else if (length > 0) return true;
  };

  _handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  _handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  _handleSubmit = evt => {
    evt.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (!email || !password) {
      return;
    }

    this.setState({ isLoading: true });

    this.props
      .mutate({
        variables: {
          email,
          password
        }
      })
      .then(({ data }) => {
        const { login } = data;
        if (login.error) {
          this.setState({
            isLoading: false,
            errorMessage: login.error
          });
        } else {
          const { jwtToken } = login;
          setLocalStorageToken(jwtToken);
          this.setState({
            isAuthenticated: true,
            redirect: `/${jwtToken.appKey}`
          });
        }
      });
  };
}

LoginContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default graphql(loginMutation)(LoginContainer);
