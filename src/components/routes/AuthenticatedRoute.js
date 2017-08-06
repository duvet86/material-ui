import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

const AuthenticatedRoute = ({ component, ...props }) => {
  const boundRender = props =>
    isUserAuthenticated()
      ? React.createElement(component, props)
      : <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />;

  return <Route exact {...props} render={boundRender} />;
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
};

export default AuthenticatedRoute;
