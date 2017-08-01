import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";

import DraggableComponent from "components/formBuilder/DraggableComponent";

const DraggableComponentList = ({ componentsList, nItemsInPage }) =>
  <Paper>
    {componentsList.map(component =>
      <DraggableComponent
        key={component.id}
        index={nItemsInPage}
        formItem={component}
      />
    )}
  </Paper>;

DraggableComponentList.propTypes = {
  componentsList: PropTypes.array.isRequired
};

export default DraggableComponentList;
