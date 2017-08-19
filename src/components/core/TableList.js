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

import TableListRow from "components/core/TableListRow";
import ActionFeedback from "components/core/ActionFeedback";

const TableList = ({
  pageTitle,
  columnHeaders,
  labelProperty,
  excludedProperties,
  itemList,
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
        label="Add New"
        primary={true}
        containerElement={<Link to={`${location.pathname}/new`} />}
      />
    </CardActions>
    <CardTitle title={pageTitle} />
    <CardText>
      <TextField hintText="Search" />
    </CardText>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          {columnHeaders.map((label, index) =>
            <TableHeaderColumn key={index}>
              <FlatButton
                label={label}
                fullWidth
                style={{ textAlign: "left" }}
              />
            </TableHeaderColumn>
          )}
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true}>
        {itemList.map(item => {
          const boundOnShowAlert = () =>
            onShowAlert(item.id, item[labelProperty]);
          return (
            <TableListRow
              excludedProperties={excludedProperties}
              key={item.id}
              item={item}
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
          onClick={handleAlertClose}
        />,
        <RaisedButton
          label="Ok"
          primary={true}
          onClick={handleAlertClose}
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

TableList.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  columnHeaders: PropTypes.array.isRequired,
  labelProperty: PropTypes.string.isRequired,
  excludedProperties: PropTypes.array.isRequired,
  itemList: PropTypes.array.isRequired,
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

export default TableList;
