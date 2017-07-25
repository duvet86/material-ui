import React from "react";
import PropTypes from "prop-types";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PageHeader from "components/core/PageHeader";
import PBComponentList from "components/pageBuilder/PBComponentList";
import PBDroppableArea from "components/pageBuilder/PBDroppableArea";

const PageBuilder = ({ components }) =>
  <div>
    <PageHeader>Page Builder</PageHeader>
    <DragDropContextProvider backend={HTML5Backend}>
      <div>
        <PBComponentList components={components} />
        <PBDroppableArea />
      </div>
    </DragDropContextProvider>
  </div>;

PageBuilder.propTypes = {
  components: PropTypes.array.isRequired
};

export default PageBuilder;
