import React, { Component } from "react";
import PropTypes from "prop-types";

import { rolesListQuery } from "components/rolesPage/graphqlQueries";
import withLoading from "lib/withLoading";

import ApplicationsList from "components/rolesPage/ApplicationsList";

class ApplicationsListContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    mutate: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired,
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
    const { itemList, location } = this.props;
    const {
      isActionFeedbackOpen,
      actionFeedbackMessage,
      isAlertOpen,
      alertMessage,
      isDeleting,
      isError
    } = this.state;

    return (
      <ApplicationsList
        itemList={itemList}
        onShowAlert={this._onShowAlert}
        handleAlertClose={this._handleAlertClose}
        location={location}
        isActionFeedbackOpen={isActionFeedbackOpen}
        actionFeedbackMessage={actionFeedbackMessage}
        onActionFeedbackClose={this._onActionFeedbackClose}
        isAlertOpen={isAlertOpen}
        alertMessage={alertMessage}
        isDeleting={isDeleting}
        isError={isError}
      />
    );
  }

  _onShowAlert = (roleId, roleName) =>
    this.setState({
      isAlertOpen: true,
      alertMessage: `Delete role ${roleName}`,
      roleId
    });

  _handleAlertClose = ({ currentTarget }) => {
    if (currentTarget && currentTarget.innerText.trim() === "OK") {
      const { mutate } = this.props;
      const { roleId } = this.state;

      this.setState({
        isDeleting: true
      });

      mutate({
        variables: { roleId },
        update: (store, { data: { archiveRole: roleIdToDelete } }) => {
          // Read the data from our cache for this query.
          const data = store.readQuery({ query: rolesListQuery });
          const index = data.roles.findIndex(({ id }) => id === roleIdToDelete);
          if (index === -1) {
            return;
          }

          data.roles.splice(index, 1);
          // Write our data back to the cache.
          store.writeQuery({ query: rolesListQuery, data });
        }
      })
        .then(({ data }) => {
          this.setState({
            isActionFeedbackOpen: true,
            actionFeedbackMessage: "Role deleted successfully.",
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

export default withLoading(ApplicationsListContainer);
