import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import { CardActions, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import FilterIcon from "material-ui/svg-icons/content/filter-list";
import RefreshIcon from "material-ui/svg-icons/navigation/refresh";

import Role from "components/rolesPage/Role";

const RolesList = ({ roles, handleArchiveRole, location }) =>
  <Paper>
    <CardActions style={{ position: "absolute", right: 0 }}>
      <FlatButton label="Add Filter" primary={true} icon={<FilterIcon />} />
      <FlatButton label="Refresh" primary={true} icon={<RefreshIcon />} />
    </CardActions>
    <CardTitle title="Manage Roles" />
    <CardText>
      <TextField hintText="Search" />
    </CardText>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>
            <FlatButton label="Name" fullWidth style={{ textAlign: "left" }} />
          </TableHeaderColumn>
          <TableHeaderColumn>
            <FlatButton
              label="Description"
              fullWidth
              style={{ textAlign: "left" }}
            />
          </TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true}>
        {roles.map(role => {
          const boundEvent = () => handleArchiveRole(role.id);
          return (
            <Role
              key={role.id}
              role={role}
              handleArchiveRole={boundEvent}
              location={location}
            />
          );
        })}
      </TableBody>
    </Table>
  </Paper>;

RolesList.propTypes = {
  roles: PropTypes.array.isRequired,
  handleArchiveRole: PropTypes.func.isRequired
};

export default RolesList;
