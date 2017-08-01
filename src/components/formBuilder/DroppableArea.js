import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

import ItemTypes from "components/formBuilder/ItemTypes";
import FormElementContainer from "components/formBuilder/formElements/FormElementContainer";

const style = {
  border: "1px dashed #ddd",
  padding: "1rem",
  minHeight: "411px",
  position: "relative"
};

const textStyle = {
  position: "absolute",
  top: "50%",
  height: "100px",
  marginTop: "-50px",
  width: "100%"
};

const boxTarget = {
  drop({ onItemAdd }, monitor) {
    const { id, action } = monitor.getItem();

    if (action === "UPDATE" || monitor.didDrop()) {
      return;
    }
    onItemAdd(id);
  }
};

const DroppableArea = ({
  canDrop,
  isOver,
  connectDropTarget,
  pageItemIds,
  draggableItemList,
  onPageItemMove
}) => {
  const isActive = canDrop && isOver;

  let backgroundColor = "#f8f8f8";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  let componentList;
  if (pageItemIds.length === 0) {
    componentList = (
      <div style={textStyle}>
        {isActive ? "Release to drop" : "Drag a Component here"}
      </div>
    );
  } else {
    componentList = pageItemIds.map((elementId, index) => {
      const item = draggableItemList.find(({ id }) => id === elementId);
      return (
        <FormElementContainer
          key={index}
          index={index}
          formItem={item}
          onPageItemMove={onPageItemMove}
        />
      );
    });
  }

  return connectDropTarget(
    <div style={{ ...style, backgroundColor }}>
      {componentList}
    </div>
  );
};

DroppableArea.propTypes = {
  pageItemIds: PropTypes.array.isRequired,
  draggableItemList: PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  onPageItemMove: PropTypes.func.isRequired
};

export default DropTarget(
  ItemTypes.FORM_ITEM,
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(DroppableArea);
