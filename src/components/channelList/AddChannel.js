import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

const AddChannel = ({ handleKeyUp }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        hintText="Add New Channel"
        floatingLabelText="Add New Channel"
        onKeyUp={handleKeyUp}
      />
    </form>
  );
};

AddChannel.propTypes = {
  handleKeyUp: PropTypes.func.isRequired
};

export default AddChannel;
