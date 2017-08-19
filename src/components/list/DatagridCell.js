import React from "react";
import PropTypes from "prop-types";

import { TableRowColumn } from "material-ui/Table";

const DatagridCell = ({ field, record, pathname, ...rest }) =>
  <TableRowColumn {...rest}>
    {React.cloneElement(field, { record, pathname })}
  </TableRowColumn>;

DatagridCell.propTypes = {
  field: PropTypes.element,
  record: PropTypes.object,
  pathname: PropTypes.string
};

export default DatagridCell;
