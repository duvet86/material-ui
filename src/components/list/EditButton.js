import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import FlatButton from "material-ui/FlatButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";

const EditButton = ({ record, pathname, disabledSource }) =>
  record[disabledSource]
    ? <FlatButton
        label="Edit"
        primary={true}
        icon={<EditIcon />}
        disabled={true}
      />
    : <FlatButton
        label="Edit"
        primary={true}
        icon={<EditIcon />}
        containerElement={<Link to={`${pathname}/${record.id}`} />}
      />;

EditButton.propTypes = {
  record: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  disabledSource: PropTypes.string
};

export default EditButton;
