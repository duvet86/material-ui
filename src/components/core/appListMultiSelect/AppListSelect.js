import React, { Component } from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import withLoading from "lib/withLoading";

class AppListMultiSelect extends Component {
  static propTypes = {
    applicationList: PropTypes.array.isRequired,
    appSelectedIds: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
      .isRequired,
    multiple: PropTypes.bool,
    floatingLabelText: PropTypes.string
  };
  state = {
    values: this.props.appSelectedIds
  };

  render() {
    const { values } = this.state;
    const { floatingLabelText, multiple } = this.props;

    return (
      <SelectField
        hintText="Select an Application"
        floatingLabelText={floatingLabelText}
        value={values}
        multiple={multiple}
        fullWidth={true}
        onChange={this._handleChange}
      >
        {this._menuItems(values)}
      </SelectField>
    );
  }

  _handleChange = (event, index, values) => this.setState({ values });

  _menuItems(values) {
    const { applicationList, multiple } = this.props;
    
    return applicationList.map(({ id, label }) =>
      <MenuItem
        key={id}
        insetChildren={multiple}
        checked={multiple && values.indexOf(id) > -1}
        value={id}
        primaryText={label}
      />
    );
  }
}

export default withLoading(AppListMultiSelect);
