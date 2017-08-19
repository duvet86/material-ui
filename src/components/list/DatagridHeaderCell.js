import React from "react";
import PropTypes from "prop-types";

import { TableHeaderColumn } from "material-ui/Table";
import FlatButton from "material-ui/FlatButton";

export const DatagridHeaderCell = ({ field }) =>
  <TableHeaderColumn>
    {field.props.sortable === false || field.props.source == null
      ? <span>
          {field.props.label}
        </span>
      : <FlatButton label={field.props.label} />}
  </TableHeaderColumn>;

DatagridHeaderCell.propTypes = {
  field: PropTypes.element
};

export default DatagridHeaderCell;
