import React, { Component } from "react";

import withLoading from "lib/withLoading";

import EditRole from "components/rolesPage/EditRole";

class EditRoleContainer extends Component {
  state = {
    selectedValueIds: this.props.role.appList.map(({ id }) => id)
  };

  render() {
    const { role, path } = this.props;

    return (
      <EditRole
        role={role}
        path={path}
        selectedValueIds={this.state.selectedValueIds}
        handleAppListChange={this._handleChange}
      />
    );
  }

  _handleChange = (event, index, values) =>
    this.setState({ selectedValueIds: values });
}

export default withLoading(EditRoleContainer);
