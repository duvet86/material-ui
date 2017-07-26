import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import Divider from "material-ui/Divider";

import * as iconMapping from "components/pageBuilder/iconMapping";
import ItemTypes from "components/pageBuilder/ItemTypes";

const componentSource = {
  beginDrag({ component }) {
    return { id: component.id };
  },
  endDrag(props, monitor) {
    //const item = monitor.getItem();
    //const dropResult = monitor.getDropResult();
    // if (dropResult) {
    //   props.addComponent(item.id);
    // }
  }
};

const PBComponent = ({ isDragging, connectDragSource, component }) => {
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

PBComponent.propTypes = {
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
)(PBComponent);
