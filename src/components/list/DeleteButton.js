import React from "react";
import PropTypes from "prop-types";

import FlatButton from "material-ui/FlatButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";

const DeleteButton = ({ record, disabledSource }) =>
  <FlatButton
    label="Delete"
    secondary={true}
    icon={<DeleteIcon />}
    disabled={record[disabledSource]}
  />;

DeleteButton.propTypes = {
  record: PropTypes.object.isRequired,
  disabledSource: PropTypes.string
};

export default DeleteButton;
