import React from "react";
import { Link } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

import { white } from "material-ui/styles/colors";
import PersonIcon from "material-ui/svg-icons/social/person";

import LogoutContainer from "components/logout/LogoutContainer";

const UserMenu = ({ userName, appKey }) =>
  <IconMenu
    iconButtonElement={
      <IconButton>
        <PersonIcon color={white} />
      </IconButton>
    }
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    targetOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <Link to={`/${appKey}/profile`}>
      <MenuItem primaryText={userName} />
    </Link>
    <Link to={`/${appKey}/settings`}>
      <MenuItem primaryText="Settings" />
    </Link>
    <LogoutContainer />
  </IconMenu>;

UserMenu.muiName = "IconMenu";

export default UserMenu;
