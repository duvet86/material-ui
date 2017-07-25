import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { grey400 } from "material-ui/styles/colors";

const iconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const Channel = ({ id, name, handleDeleteChannel }) =>
  <ListItem primaryText={name} rightIconButton={rightIconMenu} />;

Channel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDeleteChannel: PropTypes.func.isRequired
};

export default Channel;
