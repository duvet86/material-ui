import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import Divider from "material-ui/Divider";

import iconMapping from "components/formBuilder/iconMapping";
import ItemTypes from "components/formBuilder/ItemTypes";

const componentSource = {
  beginDrag({ index, formItem: { id } }) {
    return { index, id, action: "ADD" };
  }
};

const DraggableItem = ({ isDragging, connectDragSource, formItem }) => {
  const { icon, name } = formItem;
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ opacity }}>
      <div style={{ padding: "10px", display: "flex", alignItems: "center" }}>
        {React.createElement(iconMapping[icon])}
        <div style={{ marginLeft: "7px" }}>
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
    id: PropTypes.number.isRequired,
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
)(DraggableItem);