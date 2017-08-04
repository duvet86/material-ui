import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import Divider from "material-ui/Divider";
import injectSheet from "react-jss";

import iconMapping from "components/formBuilder/iconMapping";
import ItemTypes from "components/formBuilder/ItemTypes";

const style = {
  flexContainer: {
    cursor: "pointer",
    padding: "10px",
    display: "flex",
    alignItems: "center"
  },
  itemLabel: {
    marginLeft: "7px"
  }
};

const componentSource = {
  beginDrag({ index, formItem: { id } }) {
    return { index, id, action: "ADD" };
  }
};

const DraggableItem = ({
  isDragging,
  connectDragSource,
  formItem,
  classes: { flexContainer, itemLabel }
}) => {
  const { icon, name } = formItem;
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ opacity }}>
      <div className={flexContainer}>
        {React.createElement(iconMapping[icon])}
        <div className={itemLabel}>
          {name}
        </div>
      </div>
      <Divider />
    </div>
  );
};

DraggableItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  formItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  })
};

export default DragSource(
  ItemTypes.FORM_ITEM,
  componentSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(injectSheet(style)(DraggableItem));
