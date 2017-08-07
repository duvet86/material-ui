import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";

import withLoading from "lib/withLoading";

import EditRole from "components/rolesPage/EditRole";

class EditRoleContainer extends Component {
  static propTypes = {
    initRole: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired
  };

  state = {
    role: this.props.initRole
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
}

export default withLoading(EditRoleContainer);
