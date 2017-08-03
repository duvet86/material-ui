import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "material-ui/List";
import FolderIcon from "material-ui/svg-icons/file/folder";
import FolderOpenIcon from "material-ui/svg-icons/file/folder-open";

export default class MenuItemCollapsible extends Component {
  state = { isOpen: false };

  render() {
    const { label, children, appKey, pathname } = this.props;
    const style = { backgroundColor: "rgba(0, 0, 0, 0.2)" };

    return (
      <ListItem
        leftIcon={this.state.isOpen ? <FolderOpenIcon /> : <FolderIcon />}
        primaryText={label}
        primaryTogglesNestedList={true}
        onNestedListToggle={this._onToggle}
        nestedItems={children.map(({ id, location, label }) => {
          const locationPath = `/${appKey}${location}`;
          return (
            <ListItem
              key={id}
              primaryText={label}
              style={pathname === locationPath ? style : null}
              containerElement={<Link to={`/${appKey}${location}`} />}
            />
          );
        })}
      />
    );
  }

  _onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

MenuItemCollapsible.muiName = "ListItem";
