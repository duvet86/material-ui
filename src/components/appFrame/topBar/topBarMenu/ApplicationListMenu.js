import React from "react";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import { white } from "material-ui/styles/colors";
import AppsIcon from "material-ui/svg-icons/navigation/apps";

import LinkMenuItem from "components/core/LinkMenuItem";

const ApplicationListMenu = ({ appList, match: { params: appkey } }) =>
  <IconMenu
    iconButtonElement={
      <IconButton>
        <AppsIcon color={white} />
      </IconButton>
    }
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    targetOrigin={{ horizontal: "right", vertical: "top" }}
  >
    {appList.map(({ label, key, icon }, index) =>
      <LinkMenuItem
        key={index}
        selected={key === appkey.appKey}
        to={`/${key}/`}
        label={label}
      />
    )}
  </IconMenu>;

ApplicationListMenu.muiName = "IconMenu";

export default ApplicationListMenu;
