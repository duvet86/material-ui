import React from "react";
import PropTypes from "prop-types";
import { TableRow, TableRowColumn } from "material-ui/Table";
import FlatButton from "material-ui/FlatButton";
import EditIcon from "material-ui/svg-icons/editor/mode-edit";

const RoleRecord = ({
  role: { name, description },
  handleArchiveRole,
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
      <FlatButton label="Edit" primary={true} icon={<EditIcon />} />
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
