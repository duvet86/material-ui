import React from "react";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

import { white } from "material-ui/styles/colors";
import Notifications from "material-ui/svg-icons/social/notifications";

const NotificationMenu = props =>
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <Notifications color={white} />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "bottom" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>;

NotificationMenu.muiName = "IconMenu";

export default NotificationMenu;
