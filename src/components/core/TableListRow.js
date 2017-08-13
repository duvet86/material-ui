import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TableRow, TableRowColumn } from "material-ui/Table";
import FlatButton from "material-ui/FlatButton";

import EditIcon from "material-ui/svg-icons/editor/mode-edit";
import DeleteIcon from "material-ui/svg-icons/action/delete";

const TableListRow = ({
  item,
  onShowAlert,
  location: { pathname },
  excludedProperties,
  ...props
}) =>
  <TableRow {...props}>
    {Object.keys(item)
      .filter(key => excludedProperties.indexOf(key) === -1)
      .map((key, index) =>
        <TableRowColumn key={index}>
          {item[key]}
        </TableRowColumn>
      )}
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
        disabled={item.isSystem}
        containerElement={<Link to={`${pathname}/${item.id}`} />}
      />
      <FlatButton
        label="Delete"
        secondary={true}
        icon={<DeleteIcon />}
        disabled={item.isSystem}
        onTouchTap={onShowAlert}
      />
    </TableRowColumn>
  </TableRow>;

TableListRow.propTypes = {
  item: PropTypes.object.isRequired,
  onShowAlert: PropTypes.func.isRequired,
  excludedProperties: PropTypes.array.isRequired
};

export default TableListRow;
