import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const Application = ({ id, label, handleArchiveApp }) =>
  <ListItem>
    {label} <RaisedButton onTouchTap={handleArchiveApp}>Delete</RaisedButton>
  </ListItem>;

Application.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleArchiveApp: PropTypes.func.isRequired
};

export default Application;
