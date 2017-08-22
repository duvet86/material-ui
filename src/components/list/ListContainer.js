import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import withLoading from "lib/withLoading";

import Paper from "material-ui/Paper";
import { CardActions, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import CircularProgress from "material-ui/CircularProgress";

import DoneIcon from "material-ui/svg-icons/action/done";

import ActionFeedback from "components/core/ActionFeedback";

/**
 * The ListContainer component adds state to a Datagrid.
 *
 * Props:
 *  - pageTitle: the page title to be displayed.
 *  - data: list of records to be passed to a Datagrid.
 *  - labelProperty: property to be used when displaying delete modal.
 *                   'Are you sure ou want to delete item: record[labelProperty]?'.
 *  - updateFunc: function used for the optimistic update.
 *
 * @example Display a list of applications:
 *  const ListContainer = (props) =>
 *    <ListContainer
 *      pageTitle="Manage Applications"
 *      labelProperty="label"
 *      updateFunc={updateFunc}
 *      {...props}
 *    >
 *      <ApplicationList />
 *    </ListContainer>;
 */

class ListContainer extends Component {
  static propTypes = {
    pageTitle: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    labelProperty: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    mutate: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  state = {
    isActionFeedbackOpen: false,
    actionFeedbackMessage: "",
    isAlertOpen: false,
    alertMessage: "",
    isDeleting: false,
    isError: false,
    idToDelete: null
  };

  render() {
    const {
      location: { pathname },
      pageTitle,
      labelProperty,
      data
    } = this.props;

    const {
      isActionFeedbackOpen,
      actionFeedbackMessage,
      isAlertOpen,
      alertMessage,
      isDeleting,
      isError
    } = this.state;

    return (
      <Paper>
        <CardActions style={{ position: "absolute", right: 0 }}>
          <RaisedButton
            label="Add New"
            primary={true}
            containerElement={<Link to={`${pathname}/new`} />}
          />
        </CardActions>
        <CardTitle title={pageTitle} />
        {React.cloneElement(this.props.children, {
          pageTitle,
          labelProperty,
          data,
          pathname,
          isActionFeedbackOpen,
          actionFeedbackMessage,
          isAlertOpen,
          alertMessage,
          isDeleting,
          isError,
          onShowAlert: this._onShowAlert,
          handleAlertClose: this._handleAlertClose,
          onActionFeedbackClose: this._onActionFeedbackClose
        })}
        <Dialog
          title={alertMessage}
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this._handleAlertClose}
            />,
            <RaisedButton
              label="Ok"
              primary={true}
              onClick={this._handleAlertClose}
              icon={isDeleting ? <CircularProgress size={25} /> : <DoneIcon />}
            />
          ]}
          modal={false}
          open={isAlertOpen}
          onRequestClose={this._handleAlertClose}
        >
          Are you sure?
        </Dialog>
        <ActionFeedback
          isOpen={isActionFeedbackOpen}
          message={actionFeedbackMessage}
          onRequestClose={this._onActionFeedbackClose}
          error={isError}
        />
      </Paper>
    );
  }

  _onShowAlert = (idToDelete, name) =>
    this.setState({
      isAlertOpen: true,
      alertMessage: `Delete ${name}`,
      idToDelete
    });

  _handleAlertClose = ({ currentTarget }) => {
    if (currentTarget && currentTarget.innerText.trim() === "OK") {
      this.setState({
        isDeleting: true
      });

      const { updateFunc } = this.props;
      const variables = { id: this.state.idToDelete };
      const mutatePayload =
        updateFunc == null ? { variables } : { variables, update: updateFunc };

      this.props
        .mutate(mutatePayload)
        .then(({ data }) => {
          this.setState({
            isActionFeedbackOpen: true,
            actionFeedbackMessage: "Item deleted successfully.",
            isAlertOpen: false,
            isDeleting: false,
            isError: false
          });
        })
        .catch(error => {
          this.setState({
            isActionFeedbackOpen: true,
            actionFeedbackMessage: `Something went wrong: ${error}`,
            isAlertOpen: false,
            isDeleting: false,
            isError: true
          });
          console.error(error);
        });
    } else {
      this.setState({ isAlertOpen: false });
    }
  };

  _onActionFeedbackClose = () =>
    this.setState({
      isActionFeedbackOpen: false
    });
}

export default withLoading(ListContainer);
