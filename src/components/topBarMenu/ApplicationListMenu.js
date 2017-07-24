import React from "react";
import { Link } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

import { white } from "material-ui/styles/colors";
import Apps from "material-ui/svg-icons/navigation/apps";

const ApplicationListMenu = ({ appList }) =>
  <IconMenu
    iconButtonElement={
      <IconButton>
        <Apps color={white} />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "bottom" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    {appList.map(({ label, key, icon }, index) =>
      <Link key={index} to={`/${key}`}>
        <MenuItem primaryText={label} />
      </Link>
    )}
  </IconMenu>;

ApplicationListMenu.muiName = "IconMenu";

export default ApplicationListMenu;
