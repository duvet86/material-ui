import React from "react";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import IconButton from "material-ui/IconButton";
import CreateNewFolderIcon from "material-ui/svg-icons/file/create-new-folder";
import SaveIcon from "material-ui/svg-icons/content/save";
import FolderOpenIcon from "material-ui/svg-icons/file/folder-open";

export default class PageToolbar extends React.Component {
  state = {
    value: 3
  };

  render() {
    return (
      <Toolbar style={{ marginBottom: "15px" }}>
        <ToolbarGroup>
          <TextField hintText="Form Name" defaultValue="New Form" />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton tooltip="Save">
            <SaveIcon />
          </IconButton>
          <IconButton tooltip="New">
            <CreateNewFolderIcon />
          </IconButton>
          <IconButton tooltip="Open">
            <FolderOpenIcon />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }

  _handleChange = (event, index, value) => this.setState({ value });
}
