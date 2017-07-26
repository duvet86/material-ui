import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";

import PBComponent from "components/pageBuilder/PBComponent";

const PBComponentList = ({ componentsList }) =>
  <Paper>
    {componentsList.map(component =>
      <PBComponent key={component.id} component={component} />
    )}
  </Paper>;

PBComponentList.propTypes = {
  componentsList: PropTypes.array.isRequired
};

export default PBComponentList;
