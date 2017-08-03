import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "material-ui/MenuItem";

export default class LinkMenuItem extends Component {
  render() {
    const { to, label, pathname, ...props } = this.props;
    const style = { backgroundColor: "rgba(0, 0, 0, 0.2)" };

    return (
      <Link to={to} style={pathname === to ? style : null}>
        <MenuItem {...props} primaryText={label} />
      </Link>
    );
  }
}

LinkMenuItem.muiName = "MenuItem";
