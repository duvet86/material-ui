import React from "react";
import { findDOMNode } from "react-dom";
import { DropTarget, DragSource } from "react-dnd";

import { componentMapping } from "lib/test";
import ItemTypes from "components/formBuilder/ItemTypes";

const componentSource = {
  beginDrag({ index, formItem: { id } }) {
    return { index, id, action: "UPDATE" };
  }
};

const boxTarget = {
  hover(props, monitor, component) {
    const { id: elementId, action, index: dragIndex } = monitor.getItem();
    if (action === "ADD") {
      debugger;
    }
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.onPageComponentMove(dragIndex, hoverIndex, elementId);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

const FormElementContainer = ({
  connectDragSource,
  connectDropTarget,
  ...props
}) =>
  connectDragSource(
    connectDropTarget(
      <div
        style={{
          cursor: "pointer",
          padding: "5px",
          borderRadius: "2px",
          border: "#eee solid",
          marginBottom: "5px"
        }}
      >
        {React.createElement(componentMapping[props.formItem.component], props)}
      </div>
    )
  );

export default DropTarget(
  ItemTypes.COMPONENT,
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(
  DragSource(ItemTypes.COMPONENT, componentSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(FormElementContainer)
);
