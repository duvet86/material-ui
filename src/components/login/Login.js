import "components/login/css/login.css";

import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { deepOrange500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import withLoading from "lib/withLoading";

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const Login = ({
  handleSubmit,
  handleEmailChange,
  getEmailValidationState,
  getPasswordValidationState,
  handlePasswordChange,
  emailValue,
  passwordValue,
  errorMessage
}) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <form className="form-signin" onSubmit={handleSubmit}>
      <h2 className="form-signin-heading">Please sign in</h2>
      <TextField
        fullWidth
        hintText="Email"
        floatingLabelText="Email"
        value={emailValue}
        onChange={handleEmailChange}
        errorText={getEmailValidationState() ? "This field is required" : null}
      />
      <TextField
        fullWidth
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        errorText={
          getPasswordValidationState() ? "This field is required" : null
        }
      />
      <div>
        {errorMessage}
      </div>
      <RaisedButton type="submit" fullWidth={true}>
        Submit
      </RaisedButton>
    </form>
  </MuiThemeProvider>;

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  getEmailValidationState: PropTypes.func.isRequired,
  getPasswordValidationState: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

export default withLoading(Login, true);
