import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";

import DraggableItem from "components/formBuilder/DraggableItem";

const DraggableItemList = ({ draggableItemList, nItemsInPage }) =>
  <Paper>
    {draggableItemList.map(component =>
      <DraggableItem
        key={component.id}
        index={nItemsInPage}
        formItem={component}
      />
    )}
  </Paper>;

DraggableItemList.propTypes = {
  draggableItemList: PropTypes.array.isRequired,
  nItemsInPage: PropTypes.number.isRequired
};

export default DraggableItemList;
