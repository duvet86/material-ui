import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TableRow, TableRowColumn } from "material-ui/Table";
import FlatButton from "material-ui/FlatButton";

import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";

const RoleRecord = ({
  role: { id, name, description },
  onShowAlert,
  location: { pathname },
  ...props
}) =>
  <TableRow {...props}>
    <TableRowColumn>
      {name}
    </TableRowColumn>
    <TableRowColumn>
      {description}
    </TableRowColumn>
    <TableRowColumn
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      }}
    >
      <FlatButton
        label="Edit"
        primary={true}
        icon={<EditIcon />}
        containerElement={<Link to={`${pathname}/${id}`} />}
      />
      <FlatButton
        label="Delete"
        secondary={true}
        icon={<DeleteIcon />}
        onTouchTap={onShowAlert}
      />
    </TableRowColumn>
  </TableRow>;

RoleRecord.propTypes = {
  role: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onShowAlert: PropTypes.func.isRequired
};

export default RoleRecord;
