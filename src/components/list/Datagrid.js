import React from "react";
import PropTypes from "prop-types";

import { Table, TableHeader, TableRow } from "material-ui/Table";

import DatagridHeaderCell from "components/list/DatagridHeaderCell";
import DatagridBody from "components/list/DatagridBody";

/**
 * The Datagrid component renders a list of records as a table.
 *
 * Props:
 *  - data: list of records to display
 *  - pathname: location path
 *
 * @example Display all posts as a datagrid
 * export const PostList = (props) => (
 *   <Datagrid {...props}>
 *     <TextField label="id" source="id" />
 *     <TextField label="Amazing Title" source="title" />
 *     <TextField label="I'm the body" source="body" />
 *     <EditButton />
 *   </Datagrid>
 * );
 */

const Datagrid = ({ children, data, pathname }) =>
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        {React.Children.map(children, (field, index) =>
          <DatagridHeaderCell key={index} field={field} />
        )}
      </TableRow>
    </TableHeader>
    <DatagridBody data={data} pathname={pathname}>
      {children}
    </DatagridBody>
  </Table>;

Datagrid.propTypes = {
  data: PropTypes.array.isRequired,
  pathname: PropTypes.string
};

Datagrid.defaultProps = {
  data: []
};

export default Datagrid;
