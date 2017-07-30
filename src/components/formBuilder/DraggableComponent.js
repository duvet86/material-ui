import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import Divider from "material-ui/Divider";

import * as iconMapping from "components/formBuilder/iconMapping";
import ItemTypes from "components/formBuilder/ItemTypes";

const componentSource = {
  beginDrag({ index, component }) {
    return { index, id: component.id, action: "ADD" };
  }
};

const DraggableComponent = ({ isDragging, connectDragSource, component }) => {
  const { icon, name } = component;
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ opacity }}>
      <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
        {React.createElement(iconMapping[icon])}
        <div style={{ marginLeft: "7px" }}>
          {name}
        </div>
      </div>
      <Divider />
    </div>
  );
};

DraggableComponent.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  component: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })
};

export default DragSource(
  ItemTypes.COMPONENT,
  componentSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(DraggableComponent);
