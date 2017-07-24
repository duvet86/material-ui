import React from "react";
import PropTypes from "prop-types";
import { List } from "material-ui/List";

import PBComponent from "components/pageBuilder/PBComponent";

const PBComponentList = ({ components }) =>
  <List>
    {components.map(component =>
      <PBComponent key={component.id} component={component} />
    )}
  </List>;

PBComponentList.propTypes = {
  components: PropTypes.array.isRequired
};

export default PBComponentList;
