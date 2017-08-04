import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Row, Col } from "react-flexbox-grid";

import SubHeader from "components/core/SubHeader";
import DraggableItemList from "components/formBuilder/DraggableItemList";
import DroppableArea from "components/formBuilder/DroppableArea";
import PageToolbar from "components/formBuilder/PageToolbar";

const FormBuilder = ({
  draggableItemList,
  pageItemIds,
  onItemAdd,
  onPageItemMove,
  onPageItemRemove,
  nItemsInPage
}) =>
  <div>
    <SubHeader>Form Builder</SubHeader>
    <PageToolbar />
    <Row>
      <Col xs={12} sm={4} md={3}>
        <DraggableItemList
          draggableItemList={draggableItemList}
          nItemsInPage={nItemsInPage}
        />
      </Col>
      <Col xs={12} sm={8} md={9}>
        <DroppableArea
          draggableItemList={draggableItemList}
          pageItemIds={pageItemIds}
          onItemAdd={onItemAdd}
          onPageItemMove={onPageItemMove}
          onPageItemRemove={onPageItemRemove}
          nItemsInPage={nItemsInPage}
        />
      </Col>
    </Row>
  </div>;

FormBuilder.propTypes = {
  draggableItemList: PropTypes.array.isRequired,
  pageItemIds: PropTypes.array.isRequired,
  onItemAdd: PropTypes.func.isRequired,
  onPageItemMove: PropTypes.func.isRequired,
  onPageItemRemove: PropTypes.func.isRequired,
  nItemsInPage: PropTypes.number.isRequired
};

export default DragDropContext(HTML5Backend)(FormBuilder);
