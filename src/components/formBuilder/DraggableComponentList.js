import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";

import DraggableComponent from "components/formBuilder/DraggableComponent";

const DraggableComponentList = ({ componentsList, totOfPageItems }) =>
  <Paper>
    {componentsList.map(component =>
      <DraggableComponent
        key={component.id}
        index={totOfPageItems}
        component={component}
      />
    )}
  </Paper>;

DraggableComponentList.propTypes = {
  componentsList: PropTypes.array.isRequired
};

export default DraggableComponentList;
