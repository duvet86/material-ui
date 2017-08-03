import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "material-ui/MenuItem";

export default class LinkMenuItem extends Component {
  render() {
    const { to, label, ...props } = this.props;

    return (
      <Link to={to}>
        <MenuItem {...props} primaryText={label} />
      </Link>
    );
  }
}

LinkMenuItem.muiName = "MenuItem";
