import React, { Component } from "react";
import PropTypes from "prop-types";

import muiTheme from "lib/muiTheme";

import CircularProgress from "material-ui/CircularProgress";

export default class Spinner extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme
    };
  }

  render() {
    return <CircularProgress size={80} thickness={7} />;
  }
}
