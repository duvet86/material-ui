import React from "react";
import { DropTarget, DragSource } from "react-dnd";

import { componentMapping } from "lib/test";
import ItemTypes from "components/formBuilder/ItemTypes";

const componentSource = {
  beginDrag({ index, formItem: { id } }) {
    return { index, id, action: "UPDATE" };
  }
  // endDrag({ onPageComponentMove, index: droppedIndex }, monitor) {
  //   const { id, index: originalIndex } = monitor.getItem();

  //   if (!monitor.didDrop()) {
  //     onPageComponentMove(droppedIndex, originalIndex, id);
  //   }
  // }
};

const boxTarget = {
  canDrop() {
    return false;
  },
  hover(
    { onPageComponentMove, formItem: { id }, index: hoverIndex },
    monitor,
    component
  ) {
    const { id: dragIndexId, index: dragIndex } = monitor.getItem();

    console.log("dragIndexId", dragIndexId);
    console.log("hoverId", id);

    if (dragIndex !== hoverIndex) {
      onPageComponentMove(dragIndex, hoverIndex, id);
    }
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
