import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";

import withLoading from "lib/withLoading";

import AddEditRole from "components/rolesPage/AddEditRole";

class AddEditRoleContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    mutate: PropTypes.func.isRequired,
    initRole: PropTypes.object
  };

  state = {
    role: this.props.initRole || {
      name: null,
      description: null,
      appList: [],
      startApp: { id: null }
    },
    isLoadingRole: false,
    isActionFeedbackOpen: false,
    actionFeedbackMessage: null
  };

  render() {
    const { location } = this.props;

    return (
      <AddEditRole
        location={location}
        role={this.state.role}
        handleNameChange={this._handleNameChange}
        handleDescriptionChange={this._handleDescriptionChange}
        handleAppListChange={this._handleAppListChange}
        handleStartAppChange={this._handleStartAppChange}
        handleSubmit={this._handleSubmit}
        isLoadingRole={this.state.isLoadingRole}
        isActionFeedbackOpen={this.state.isActionFeedbackOpen}
        actionFeedbackMessage={this.state.actionFeedbackMessage}
        onActionFeedbackClose={this._onActionFeedbackClose}
      />
    );
  }

  _handleNameChange = (event, newValue) =>
    this.setState(
      update(this.state, {
        role: {
          name: { $set: newValue }
        }
      })
    );

  _handleDescriptionChange = (event, newValue) =>
    this.setState(
      update(this.state, {
        role: {
          description: { $set: newValue }
        }
      })
    );

  _handleAppListChange = (event, index, values) => {
    const { startApp: { id: startAppId } } = this.state.role;
    const appIds = values.map(id => ({ id }));

    return !startAppId && values.length === 1
      ? this.setState(
          update(this.state, {
            role: {
              appList: { $set: appIds },
              startApp: {
                id: { $set: appIds[0].id }
              }
            }
          })
        )
      : this.setState(
          update(this.state, {
            role: {
              appList: { $set: appIds }
            }
          })
        );
  };

  _handleStartAppChange = (event, index, value) =>
    this.setState(
      update(this.state, {
        role: {
          startApp: { $set: { id: value } }
        }
      })
    );

  _handleSubmit = event => {
    event.preventDefault();

    this.setState({
      isLoadingRole: true
    });

    const { mutate, initRole } = this.props;
    const {
      id: roleId,
      name,
      description,
      appList,
      startApp: { id }
    } = this.state.role;

    const payload = {
      name,
      description,
      appList: appList.map(({ id }) => id),
      startApp: id
    };
    const variables =
      initRole != null
        ? {
            roleId,
            payload
          }
        : {
            payload
          };

    mutate({
      variables
    })
      .then(({ data }) => {
        this.setState({
          isLoadingRole: false,
          isActionFeedbackOpen: true,
          actionFeedbackMessage: "Role saved successfully."
        });
      })
      .catch(error => {
        this.setState({
          isLoadingRole: false,
          isActionFeedbackOpen: true,
          actionFeedbackMessage: `Something went wrong: ${error}`
        });
        console.error(error);
      });
  };

  _onActionFeedbackClose = () =>
    this.setState({
      isActionFeedbackOpen: false
    });
}

export default withLoading(AddEditRoleContainer);
