import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectSheet from "react-jss";

import muiTheme from "lib/muiTheme";
import withLoading from "lib/withLoading";

const style = {
  formSignin: {
    maxWidth: "330px",
    padding: "15px",
    margin: "0 auto"
  }
};

const Login = ({
  handleSubmit,
  handleEmailChange,
  getEmailValidationState,
  getPasswordValidationState,
  handlePasswordChange,
  emailValue,
  passwordValue,
  errorMessage,
  classes: { formSignin, marginBot }
}) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <form className={formSignin} onSubmit={handleSubmit}>
      <h2>Please sign in</h2>
      <TextField
        fullWidth
        hintText="Email"
        value={emailValue}
        onChange={handleEmailChange}
        errorText={getEmailValidationState() ? "This field is required" : null}
      />
      <TextField
        fullWidth
        hintText="Password"
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

export default withLoading(injectSheet(style)(Login), true);
