import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TableRow, TableRowColumn } from "material-ui/Table";
import FlatButton from "material-ui/FlatButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";

const RoleRecord = ({
  role: { id, name, description },
  handleArchiveRole,
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
    <TableRowColumn style={{ textAlign: "right" }}>
      <FlatButton
        label="Edit"
        primary={true}
        icon={<EditIcon />}
        containerElement={<Link to={`${pathname}/${id}`} />}
      />
    </TableRowColumn>
  </TableRow>;

RoleRecord.propTypes = {
  role: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  handleArchiveRole: PropTypes.func.isRequired
};

export default RoleRecord;
