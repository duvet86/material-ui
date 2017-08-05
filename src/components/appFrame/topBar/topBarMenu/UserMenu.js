import React from "react";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import Divider from "material-ui/Divider";
import { white } from "material-ui/styles/colors";
import PersonIcon from "material-ui/svg-icons/social/person";

import LinkMenuItem from "components/core/LinkMenuItem";
import LogoutContainer from "components/appFrame/logout/LogoutContainer";

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
    <LinkMenuItem to={`/${appKey}/profile`} label={userName} />
    <LinkMenuItem to={`/${appKey}/settings`} label="Settings" />
    <Divider />
    <LogoutContainer />
  </IconMenu>;

UserMenu.muiName = "IconMenu";

export default UserMenu;
