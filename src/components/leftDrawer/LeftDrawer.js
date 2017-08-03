import React from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import { ListItem } from "material-ui/List";
import LinkIcon from "material-ui/svg-icons/content/link";

import withLoading from "lib/withLoading";

import MenuItemCollapsible from "components/core/MenuItemCollapsible";

const createMenu = (links, appKey, pathname) => {
  return links.map(({ id, location, label, children }) => {
    if (location) {
      const locationPath = `/${appKey}${location}`;
      const style = { backgroundColor: "rgba(0, 0, 0, 0.2)" };
      return (
        <ListItem
          key={id}
          leftIcon={<LinkIcon />}
          primaryText={label}
          style={pathname === locationPath ? style : null}
          containerElement={<Link to={locationPath} />}
        />
      );
    }
    return children.children
      ? createMenu(children.children, appKey, pathname)
      : <MenuItemCollapsible
          key={id}
          appKey={appKey}
          label={label}
          pathname={pathname}
          children={children}
        />;
  });
};

const LeftDrawer = ({ open, appKey, menu, location: { pathname } }) =>
  <Drawer open={open} containerStyle={{ top: "48px", zIndex: 1000 }}>
    {createMenu(menu, appKey, pathname)}
  </Drawer>;

export default withLoading(LeftDrawer);
