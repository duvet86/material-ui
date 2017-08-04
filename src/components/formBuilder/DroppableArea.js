import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import injectSheet from "react-jss";
import Paper from "material-ui/Paper";

import ItemTypes from "components/formBuilder/ItemTypes";
import FormElementContainer from "components/formBuilder/formElements/FormElementContainer";

const style = {
  containerStyle: {
    padding: "1rem",
    minHeight: "411px",
    position: "relative"
  },
  textStyle: {
    position: "absolute",
    top: "50%"
  }
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
  onPageItemMove,
  classes: { containerStyle, textStyle }
}) => {
  const isActive = canDrop && isOver;

  let componentList;
  if (pageItemIds.length === 0) {
    componentList = (
      <div className={textStyle}>
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
    <div className={containerStyle}>
      <Paper>
        {componentList}
      </Paper>
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
)(injectSheet(style)(DroppableArea));
