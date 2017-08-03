import React from "react";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";

import withLoading from "lib/withLoading";

import ApplicationLabelLink from "components/core/ApplicationLabelLink";
import ApplicationListMenu from "components/topBarMenu/ApplicationListMenu";
import UserMenu from "components/topBarMenu/UserMenu";
import NotificationMenu from "components/topBarMenu/NotificationMenu";

const TopBar = ({
  user: { name, role: { appList } },
  match,
  handleToggle,
  appLabel,
  appKey
}) =>
  <AppBar
    style={{ position: "fixed", top: 0 }}
    iconStyleLeft={{ marginTop: 0 }}
    iconStyleRight={{ margin: 0 }}
    titleStyle={{ height: "initial", lineHeight: "46px" }}
    title={<ApplicationLabelLink appKey={appKey} appLabel={appLabel} />}
    onLeftIconButtonTouchTap={handleToggle}
    iconElementLeft={
      <IconButton>
        <NavigationMenu />
      </IconButton>
    }
    iconElementRight={
      <div>
        <NotificationMenu />
        <UserMenu userName={name} appKey={appKey} />
        <ApplicationListMenu appList={appList} match={match} />
      </div>
    }
  />;

TopBar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  appLabel: PropTypes.string.isRequired,
  appKey: PropTypes.string.isRequired,
  appList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default withLoading(TopBar);
