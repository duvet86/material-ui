import React from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import { ListItem } from "material-ui/List";
import LinkIcon from "material-ui/svg-icons/content/link";

import withLoading from "lib/withLoading";

import MenuItemCollapsible from "components/core/MenuItemCollapsible";

function createMenu(links, appKey) {
  return links.map(({ id, location, label, children }) => {
    if (location) {
      return (
        <ListItem
          key={id}
          leftIcon={<LinkIcon />}
          primaryText={label}
          containerElement={<Link to={`/${appKey}${location}`} />}
        />
      );
    }
    return children.children
      ? createMenu(children.children, appKey)
      : <MenuItemCollapsible
          key={id}
          appKey={appKey}
          label={label}
          children={children}
        />;
  });
}

const LeftDrawer = ({ open, handleToggle, appKey, menu, location }) =>
  <Drawer open={open} containerStyle={{ top: "48px", zIndex: 1000 }}>
    {createMenu(menu, appKey)}
  </Drawer>;

export default withLoading(LeftDrawer);
