import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";

import { componentMapping } from "lib/test";
import ItemTypes from "components/pageBuilder/ItemTypes";

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
  drop() {
    return { name: "PBDroppableArea" };
  }
};

const PBDroppableArea = ({
  canDrop,
  isOver,
  connectDropTarget,
  components
}) => {
  console.log(components);
  const isActive = canDrop && isOver;

  let backgroundColor = "#f8f8f8";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  let componentList;
  if (components.lenght === 0) {
    componentList = (
      <div style={textStyle}>
        {isActive ? "Release to drop" : "Drag a Component here"}
      </div>
    );
  } else {
    componentList = components.map((c, index) =>
      <div key={index}>
        {React.createElement(componentMapping[c.component])}
      </div>
    );
  }

  return connectDropTarget(
    <div style={{ ...style, backgroundColor }}>
      {componentList}
    </div>
  );
};

PBDroppableArea.propTypes = {
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
)(PBDroppableArea);
