import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import withLoading from "lib/withLoading";

const AppListSelect = ({
  applicationList,
  appListValueIds,
  startAppValueId,
  handleAppListChange,
  handleStartAppChange,
  disabled
}) => {
  function _appListMenuItems(valuesIds) {
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

  function _startAppMenuItems(valuesId) {
    const narrowedAppList = applicationList.filter(({ id }) =>
      appListValueIds.find(appId => appId === id)
    );

    return narrowedAppList.map(({ id, label }) =>
      <MenuItem key={id} value={id} primaryText={label} />
    );
  }

  return (
    <div>
      <div>
        <SelectField
          hintText="Select an Application"
          floatingLabelText="Applications accessible by this role"
          value={appListValueIds}
          multiple={true}
          fullWidth={true}
          onChange={handleAppListChange}
          disabled={disabled}
        >
          {_appListMenuItems(appListValueIds)}
        </SelectField>
      </div>
      <div>
        <SelectField
          hintText="Select an Application"
          floatingLabelText="Default Application accessed after login"
          value={startAppValueId}
          fullWidth={true}
          onChange={handleStartAppChange}
          disabled={disabled}
        >
          {_startAppMenuItems(startAppValueId)}
        </SelectField>
      </div>
    </div>
  );
};

AppListSelect.propTypes = {
  applicationList: PropTypes.array.isRequired,
  appListValueIds: PropTypes.array.isRequired,
  startAppValueId: PropTypes.string.isRequired,
  handleAppListChange: PropTypes.func.isRequired,
  handleStartAppChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default withLoading(AppListSelect, true);
