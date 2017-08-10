import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Paper from "material-ui/Paper";
import { CardActions, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import CircularProgress from "material-ui/CircularProgress";

import FilterIcon from "material-ui/svg-icons/content/filter-list";
import DoneIcon from "material-ui/svg-icons/action/done";

import Role from "components/rolesPage/Role";
import ActionFeedback from "components/core/ActionFeedback";

const RolesList = ({
  roles,
  onShowAlert,
  handleAlertClose,
  location,
  isActionFeedbackOpen,
  actionFeedbackMessage,
  onActionFeedbackClose,
  isAlertOpen,
  alertMessage,
  isDeleting,
  isError
}) =>
  <Paper>
    <CardActions style={{ position: "absolute", right: 0 }}>
      <FlatButton label="Add Filter" primary={true} icon={<FilterIcon />} />
      <RaisedButton
        label="Add New Role"
        primary={true}
        containerElement={<Link to={`${location.pathname}/new`} />}
      />
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
          const boundOnShowAlert = () => onShowAlert(role.id, role.name);
          return (
            <Role
              key={role.id}
              role={role}
              location={location}
              onShowAlert={boundOnShowAlert}
            />
          );
        })}
      </TableBody>
    </Table>
    <Dialog
      title={alertMessage}
      actions={[
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={handleAlertClose}
        />,
        <RaisedButton
          label="Ok"
          primary={true}
          onTouchTap={handleAlertClose}
          icon={isDeleting ? <CircularProgress size={25} /> : <DoneIcon />}
        />
      ]}
      modal={false}
      open={isAlertOpen}
      onRequestClose={handleAlertClose}
    >
      Are you sure?
    </Dialog>
    <ActionFeedback
      isOpen={isActionFeedbackOpen}
      message={actionFeedbackMessage}
      onRequestClose={onActionFeedbackClose}
      error={isError}
    />
  </Paper>;

RolesList.propTypes = {
  roles: PropTypes.array.isRequired,
  onShowAlert: PropTypes.func.isRequired,
  handleAlertClose: PropTypes.func.isRequired,
  isActionFeedbackOpen: PropTypes.bool.isRequired,
  onActionFeedbackClose: PropTypes.func.isRequired,
  actionFeedbackMessage: PropTypes.string.isRequired,
  isAlertOpen: PropTypes.bool.isRequired,
  alertMessage: PropTypes.string.isRequired,
  isDeleting: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default RolesList;
