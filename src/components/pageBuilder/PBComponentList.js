import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";

import PBComponent from "components/pageBuilder/PBComponent";

const PBComponentList = ({ componentsList }) =>
  <List>
    {componentsList.map(component =>
      <ListItem key={component.id}>
        <PBComponent component={component} />
      </ListItem>
    )}
  </List>;

PBComponentList.propTypes = {
  componentsList: PropTypes.array.isRequired
};

export default PBComponentList;
