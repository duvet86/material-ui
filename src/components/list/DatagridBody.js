import React from "react";
import PropTypes from "prop-types";

import { TableBody, TableRow } from "material-ui/Table";

import DatagridCell from "components/list/DatagridCell";

const DatagridBody = ({ children, data, pathname, ...rest }) =>
  <TableBody displayRowCheckbox={false} showRowHover={true} {...rest}>
    {data.map(record =>
      <TableRow key={record.id} selectable={false}>
        {React.Children.map(children, (field, index) =>
          <DatagridCell key={index} {...{ record, field, pathname }} />
        )}
      </TableRow>
    )}
  </TableBody>;

DatagridBody.propTypes = {
  data: PropTypes.array.isRequired,
  pathname: PropTypes.string
};

DatagridBody.defaultProps = {
  data: []
};

// trick material-ui Table into thinking this is one of the child type it supports
DatagridBody.muiName = "TableBody";

export default DatagridBody;
