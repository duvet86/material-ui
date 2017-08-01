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
  drop(props, monitor) {
    const { id, action } = monitor.getItem();

    if (action === "UPDATE" || monitor.didDrop()) {
      return;
    }
    props.onComponentAdd(id);
  }
};

const DroppableArea = ({
  canDrop,
  isOver,
  connectDropTarget,
  pageComponentIds,
  componentsList,
  onPageComponentMove
}) => {
  const isActive = canDrop && isOver;

  let backgroundColor = "#f8f8f8";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  let componentList;
  if (pageComponentIds.length === 0) {
    componentList = (
      <div style={textStyle}>
        {isActive ? "Release to drop" : "Drag a Component here"}
      </div>
    );
  } else {
    componentList = pageComponentIds.map((elementId, index) => {
      const item = componentsList.find(({ id }) => id === elementId);
      return (
        <FormElementContainer
          key={index}
          index={index}
          formItem={item}
          onPageComponentMove={onPageComponentMove}
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
  componentsList: PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(
  ItemTypes.COMPONENT,
  boxTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(DroppableArea);
