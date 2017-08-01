import React from "react";
import TextField from "material-ui/TextField";

const TextArea = () =>
  <TextField
    hintText="Label"
    floatingLabelText="TextArea and FloatingLabel"
    multiLine={true}
    rows={3}
  />;

export default TextArea;
