import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Row, Col } from "react-flexbox-grid";

import PageHeader from "components/core/PageHeader";
import DraggableComponentList from "components/formBuilder/DraggableComponentList";
import DroppableArea from "components/formBuilder/DroppableArea";

const FormBuilder = ({
  componentsList,
  pageComponentIds,
  onComponentAdd,
  onPageComponentMove,
  totOfPageItems
}) =>
  <div>
    <PageHeader>Page Builder</PageHeader>
    <Row>
      <Col xs={12} sm={4} md={3}>
        <DraggableComponentList
          componentsList={componentsList}
          totOfPageItems={totOfPageItems}
        />
      </Col>
      <Col xs={12} sm={8} md={9}>
        <DroppableArea
          componentsList={componentsList}
          pageComponentIds={pageComponentIds}
          onComponentAdd={onComponentAdd}
          onPageComponentMove={onPageComponentMove}
        />
      </Col>
    </Row>
  </div>;

FormBuilder.propTypes = {
  componentsList: PropTypes.array.isRequired,
  pageComponentIds: PropTypes.array.isRequired,
  onComponentAdd: PropTypes.func.isRequired,
  onPageComponentMove: PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(FormBuilder);
