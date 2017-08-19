import React from "react";
import { findDOMNode } from "react-dom";
import { DropTarget, DragSource } from "react-dnd";
import injectSheet from "react-jss";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui/svg-icons/navigation/close";

import formItemMapping from "lib/formItemMapping";
import ItemTypes from "components/formBuilder/ItemTypes";

const style = {
  formElement: {
    cursor: "pointer",
    marginBottom: "5px",
    position: "relative"
  }
};

const paperStyle = {
  padding: "10px",
  margin: "5px"
};

const buttonStyle = {
  position: "absolute",
  right: "2%",
  padding: 0,
  height: "auto",
  width: "auto"
};

const iconStyle = {
  width: 20,
  height: 20
};

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
  formItem: { component },
  classes: { formElement },
  connectDragSource,
  connectDropTarget,
  onPageItemRemove
}) =>
  connectDragSource(
    connectDropTarget(
      <div className={formElement}>
        <Paper style={paperStyle}>
          <div>
            <IconButton
              style={buttonStyle}
              iconStyle={iconStyle}
              onClick={onPageItemRemove}
            >
              <CloseIcon />
            </IconButton>
            {React.createElement(formItemMapping[component])}
          </div>
        </Paper>
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
  }))(injectSheet(style)(FormElementContainer))
);
