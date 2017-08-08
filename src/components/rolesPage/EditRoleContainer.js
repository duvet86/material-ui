import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";

import withLoading from "lib/withLoading";

import EditRole from "components/rolesPage/EditRole";

class EditRoleContainer extends Component {
  static propTypes = {
    initRole: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    updateRoleMutation: PropTypes.func.isRequired
  };

  state = {
    role: this.props.initRole,
    isLoadingRole: false
  };

  render() {
    const { path } = this.props;

    return (
      <EditRole
        path={path}
        role={this.state.role}
        handleDescriptionChange={this._handleDescriptionChange}
        handleAppListChange={this._handleAppListChange}
        handleStartAppChange={this._handleStartAppChange}
        handleSubmit={this._handleSubmit}
        isLoadingRole={this.state.isLoadingRole}
      />
    );
  }

  _handleDescriptionChange = (event, newValue) =>
    this.setState(
      update(this.state, {
        role: {
          description: { $set: newValue }
        }
      })
    );

  _handleAppListChange = (event, index, values) =>
    this.setState(
      update(this.state, {
        role: {
          appList: { $set: values.map(id => ({ id })) }
        }
      })
    );

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
        console.log("Role Updated.", data);
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
