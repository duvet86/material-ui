import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import withLoading from "lib/withLoading";

const RedirectToStartPage = ({ appKey, location }) =>
  <Redirect
    from="/"
    to={{
      pathname: `/${appKey}`,
      state: { from: location }
    }}
  />;

RedirectToStartPage.propTypes = {
  appKey: PropTypes.string
};

export default withLoading(RedirectToStartPage);
