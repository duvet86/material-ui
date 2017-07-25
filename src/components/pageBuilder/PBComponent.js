import React from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import { DragSource } from "react-dnd";

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

  return (
    <ListItem
      style={{ opacity }}
      ref={instance => connectDragSource(findDOMNode(instance))}
    >
      {name}
    </ListItem>
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
