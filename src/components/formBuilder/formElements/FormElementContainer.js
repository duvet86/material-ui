import React from "react";
import { DropTarget, DragSource } from "react-dnd";

import { componentMapping } from "lib/test";
import ItemTypes from "components/formBuilder/ItemTypes";

const componentSource = {
  beginDrag({ findItemIndexById, formItem: { id } }) {
    return { id, action: "UPDATE", originalIndex: findItemIndexById(id) };
  },
  endDrag(props, monitor) {
    const { originalIndex, id: droppedId } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.onPageComponentMove(droppedId, originalIndex);
    }
  }
};

const boxTarget = {
  canDrop() {
    return false;
  },
  hover(props, monitor, component) {
    const { id: draggedId } = monitor.getItem();
    const { formItem: { id: overId } } = props;

    if (draggedId !== overId) {
      const overIndex = props.findItemIndexById(overId);
      props.onPageComponentMove(draggedId, overIndex);
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
