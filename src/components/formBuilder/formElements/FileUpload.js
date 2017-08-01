import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import FileUploadIcon from "material-ui/svg-icons/file/file-upload";

class FileUpload extends Component {
  state = {
    fileName: ""
  };

  render() {
    return (
      <div>
        <RaisedButton
          containerElement="label"
          icon={<FileUploadIcon />}
          label="Choose a File"
        >
          <input
            type="file"
            style={{ display: "none" }}
            onChange={this._handleFile}
          />
        </RaisedButton>
        <span style={{ marginLeft: "10px" }}>
          {this.state.fileName}
        </span>
      </div>
    );
  }

  _handleFile = e => {
    const file = e.target.files[0];

    this.setState({
      fileName: file.name
    });
  };
}

export default FileUpload;
