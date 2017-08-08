import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";

import withLoading from "lib/withLoading";

import AddEditRole from "components/rolesPage/AddEditRole";

class EditRoleContainer extends Component {
  static propTypes = {
    initRole: PropTypes.object,
    path: PropTypes.string.isRequired,
    updateRoleMutation: PropTypes.func.isRequired
  };

  state = {
    role: this.props.initRole || {
      name: "",
      description: "",
      appList: [],
      startApp: { id: null }
    },
    isLoadingRole: false
  };

  render() {
    const { path } = this.props;

    return (
      <AddEditRole
        path={path}
        role={this.state.role}
        handleNameChange={this._handleNameChange}
        handleDescriptionChange={this._handleDescriptionChange}
        handleAppListChange={this._handleAppListChange}
        handleStartAppChange={this._handleStartAppChange}
        handleSubmit={this._handleSubmit}
        isLoadingRole={this.state.isLoadingRole}
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

    const { updateRoleMutation } = this.props;
    const {
      id: roleId,
      name,
      description,
      appList,
      startApp: { id }
    } = this.state.role;

    const variables = {
      roleId,
      payload: {
        name,
        description,
        appList: appList.map(({ id }) => id),
        startApp: id
      }
    };

    updateRoleMutation({
      variables
    })
      .then(({ data }) => {
        this.setState({
          isLoadingRole: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
}

export default withLoading(EditRoleContainer);
