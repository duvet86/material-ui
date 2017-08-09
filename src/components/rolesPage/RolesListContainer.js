import React, { Component } from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";

import RolesList from "components/rolesPage/RolesList";

class RolesListContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    mutate: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired,
    error: PropTypes.string
  };

  state = {
    isActionFeedbackOpen: false,
    actionFeedbackMessage: "",
    isAlertOpen: false,
    alertMessage: "",
    roleIdToDelete: null
  };

  render() {
    const { roles, location } = this.props;
    const {
      isActionFeedbackOpen,
      actionFeedbackMessage,
      isAlertOpen,
      alertMessage
    } = this.state;

    return (
      <RolesList
        roles={roles}
        onShowAlert={this._onShowAlert}
        handleAlertClose={this._handleAlertClose}
        location={location}
        isActionFeedbackOpen={isActionFeedbackOpen}
        actionFeedbackMessage={actionFeedbackMessage}
        onActionFeedbackClose={this._onActionFeedbackClose}
        isAlertOpen={isAlertOpen}
        alertMessage={alertMessage}
      />
    );
  }

  _onShowAlert = (roleId, roleName) =>
    this.setState({
      isAlertOpen: true,
      alertMessage: `Are you sure you want to delete the role: ${roleName}?`,
      roleId
    });

  _handleAlertClose = event => {
    if (event.target.innerText === "OK") {
      const { mutate } = this.props;
      const { roleId } = this.state;

      mutate({
        variables: { roleId }
      })
        .then(({ data }) => {
          this.setState({
            isActionFeedbackOpen: true,
            actionFeedbackMessage: "Role deleted successfully.",
            isAlertOpen: false
          });
        })
        .catch(error => {
          this.setState({
            isActionFeedbackOpen: true,
            actionFeedbackMessage: `Something went wrong: ${error}`,
            isAlertOpen: false
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

export default withLoading(RolesListContainer);
