import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

import RedirectToStartPageWithData from "components/routes/RedirectToStartPageWithData";

const UnauthenticatedRoute = ({ component, ...props }) => {
  const boundRender = props =>
    !isUserAuthenticated()
      ? React.createElement(component, props)
      : <RedirectToStartPageWithData location={props.location} />;

  return <Route exact {...props} render={boundRender} />;
};

UnauthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default UnauthenticatedRoute;
