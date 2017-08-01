import React from "react";
import { findDOMNode } from "react-dom";
import { DropTarget, DragSource } from "react-dnd";

import { formItemMapping } from "lib/test";
import ItemTypes from "components/formBuilder/ItemTypes";

const componentSource = {
  beginDrag({ index, formItem: { id } }) {
    return { index, id, action: "UPDATE" };
  }
};

const boxTarget = {
  hover({ onPageItemMove, index: hoverIndex }, monitor, component) {
    const { id, index: dragIndex } = monitor.getItem();

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
    onPageItemMove(dragIndex, hoverIndex, id);

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
  formItem: { component }
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
        {React.createElement(formItemMapping[component])}
      </div>
    )
  );

export default DropTarget(
  ItemTypes.FORM_ITEM,
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(
  DragSource(ItemTypes.FORM_ITEM, componentSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(FormElementContainer)
);
