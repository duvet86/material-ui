import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import withLoading from "lib/withLoading";

class AppListMultiSelect extends Component {
  static propTypes = {
    applicationList: PropTypes.array.isRequired,
    initAppListValueIds: PropTypes.array.isRequired,
    initStartAppValueId: PropTypes.string.isRequired
  };

  state = {
    appListValueIds: this.props.initAppListValueIds,
    startAppValueId: this.props.initStartAppValueId
  };

  render() {
    return (
      <div>
        <div>
          <SelectField
            hintText="Select an Application"
            floatingLabelText="Applications accessible by this role"
            value={this.state.appListValueIds}
            multiple={true}
            fullWidth={true}
            onChange={this._handleAppListChange}
          >
            {this._appListMenuItems(this.state.appListValueIds)}
          </SelectField>
        </div>
        <div>
          <SelectField
            hintText="Select an Application"
            floatingLabelText="Default Application accessed after login"
            value={this.state.startAppValueId}
            fullWidth={true}
            onChange={this._handleStartAppChange}
          >
            {this._startAppMenuItems(this.state.startAppValueId)}
          </SelectField>
        </div>
      </div>
    );
  }

  _handleAppListChange = (event, index, values) =>
    this.setState({ appListValueIds: values });

  _handleStartAppChange = (event, index, values) =>
    this.setState({ startAppValueId: values });

  _appListMenuItems(valuesIds) {
    const { applicationList } = this.props;

    return applicationList.map(({ id, label }) =>
      <MenuItem
        key={id}
        insetChildren={true}
        checked={valuesIds.indexOf(id) > -1}
        value={id}
        primaryText={label}
      />
    );
  }

  _startAppMenuItems(valuesId) {
    const { applicationList } = this.props;

    const narrowedAppList = applicationList.filter(({ id }) =>
      this.state.appListValueIds.find(appId => appId === id)
    );

    return narrowedAppList.map(({ id, label }) =>
      <MenuItem
        key={id}
        checked={valuesId === id}
        value={id}
        primaryText={label}
      />
    );
  }
}

export default withLoading(AppListMultiSelect);
