import React from "react";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import { List, ListItem, makeSelectable } from "material-ui/List";
import LinkIcon from "material-ui/svg-icons/content/link";

import withLoading from "lib/withLoading";

import MenuItemCollapsible from "components/core/MenuItemCollapsible";

const SelectableList = makeSelectable(List);

function createMenu(links, appKey) {
  return links.map(({ id, location, label, children }) => {
    if (location) {
      return (
        <ListItem
          key={id}
          leftIcon={<LinkIcon />}
          primaryText={label}
          value={`/${appKey}${location}`}
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

const LeftDrawer = ({ open, appKey, menu, location }) =>
  <Drawer open={open} containerStyle={{ top: "48px", zIndex: 1000 }}>
    <SelectableList value={location.pathname}>
      {createMenu(menu, appKey)}
    </SelectableList>
  </Drawer>;

export default withLoading(LeftDrawer);
