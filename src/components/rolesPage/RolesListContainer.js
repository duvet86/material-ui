import React, { Component } from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";

import RolesList from "components/rolesPage/RolesList";

class RolesListContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    roles: PropTypes.array,
    error: PropTypes.string
  };

  render() {
    const { roles } = this.props;
    return (
      <RolesList roles={roles} handleArchiveRole={this._handleArchiveRole} />
    );
  }

  _handleArchiveRole = id => {};
}

export default withLoading(RolesListContainer);
