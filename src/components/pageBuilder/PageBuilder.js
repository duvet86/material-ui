import React from "react";
import PropTypes from "prop-types";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Row, Col } from "react-flexbox-grid";

import PageHeader from "components/core/PageHeader";
import PBComponentList from "components/pageBuilder/PBComponentList";
import PBDroppableArea from "components/pageBuilder/PBDroppableArea";

const PageBuilder = ({ componentsList, pageComponents }) =>
  <div>
    <PageHeader>Page Builder</PageHeader>
    <DragDropContextProvider backend={HTML5Backend}>
      <Row>
        <Col xs={12} sm={4} md={3}>
          <PBComponentList componentsList={componentsList} />
        </Col>
        <Col xs={12} sm={8} md={9}>
          <PBDroppableArea pageComponents={pageComponents} />
        </Col>
      </Row>
    </DragDropContextProvider>
  </div>;

PageBuilder.propTypes = {
  componentsList: PropTypes.array.isRequired,
  pageComponents: PropTypes.array.isRequired
};

export default PageBuilder;
