import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "material-ui/List";
import FolderIcon from "material-ui/svg-icons/file/folder";
import FolderOpenIcon from "material-ui/svg-icons/file/folder-open";

export default class MenuItemCollapsible extends Component {
  state = { isOpen: false };
  MenuItemCollapsible = {
    muiName: "ListItem"
  };

  render() {
    const { label, children, appKey } = this.props;
    return (
      <ListItem
        leftIcon={this.state.isOpen ? <FolderOpenIcon /> : <FolderIcon />}
        primaryText={label}
        primaryTogglesNestedList={true}
        onNestedListToggle={this._onToggle}
        nestedItems={children.map(({ id, location, label }) =>
          <ListItem
            key={id}
            primaryText={label}
            value={`/${appKey}${location}`}
            containerElement={<Link to={`/${appKey}${location}`} />}
          />
        )}
      />
    );
  }

  _onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
