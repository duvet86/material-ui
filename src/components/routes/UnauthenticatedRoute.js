import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

import RedirectToStartPageWithData from "components/routes/RedirectToStartPageWithData";

const UnauthenticatedRoute = ({ component, ...props }) =>
  <Route
    {...props}
    render={props =>
      !isUserAuthenticated()
        ? React.createElement(component, props)
        : <RedirectToStartPageWithData location={props.location} />}
  />;

UnauthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default UnauthenticatedRoute;
