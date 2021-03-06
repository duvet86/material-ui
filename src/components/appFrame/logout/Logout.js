import React from "react";
import PropTypes from "prop-types";
import MenuItem from "material-ui/MenuItem";

const Logout = ({ handleClick }) =>
  <MenuItem primaryText="Logout" onClick={handleClick} />;

Logout.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Logout;
