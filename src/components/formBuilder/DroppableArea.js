import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import injectSheet from "react-jss";

import ItemTypes from "components/formBuilder/ItemTypes";
import FormElementContainer from "components/formBuilder/formElements/FormElementContainer";

const style = {
  containerStyle: {
    border: "3px dashed #ddd",
    minHeight: "435px",
    position: "relative"
  },
  textStyle: {
    position: "absolute",
    top: "12%",
    left: "40%",
    fontSize: "1.3em"
  }
};

const boxTarget = {
  drop({ nItemsInPage, onItemAdd }, monitor) {
    const { id, action, index } = monitor.getItem();

    if (
      action === "UPDATE" ||
      monitor.didDrop() ||
      nItemsInPage === index + 1 // if already dropped don't do it again
    ) {
      return;
    }
    onItemAdd(id);
  }
};

const DroppableArea = ({
  classes: { containerStyle, textStyle },
  canDrop,
  isOver,
  connectDropTarget,
  pageItemIds,
  draggableItemList,
  onPageItemMove,
  onPageItemRemove
}) => {
  const isActive = canDrop && isOver;

  let componentList;
  if (pageItemIds.length === 0) {
    componentList = (
      <div className={textStyle}>
        {isActive ? "Release to drop" : "Drag an item here"}
      </div>
    );
  } else {
    componentList = pageItemIds.map((elementId, index) => {
      const boundEvent = () => onPageItemRemove(index);
      const item = draggableItemList.find(({ id }) => id === elementId);
      return (
        <FormElementContainer
          key={index}
          index={index}
          formItem={item}
          onPageItemMove={onPageItemMove}
          onPageItemRemove={boundEvent}
        />
      );
    });
  }

  return connectDropTarget(
    <div className={containerStyle}>
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
  onPageItemMove: PropTypes.func.isRequired,
  onPageItemRemove: PropTypes.func.isRequired
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
