import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const Channel = ({ id, name, handleDeleteChannel }) =>
  <ListItem>
    {name} <RaisedButton onTouchTap={handleDeleteChannel}>Delete</RaisedButton>
  </ListItem>;

Channel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDeleteChannel: PropTypes.func.isRequired
};

export default Channel;
