import "components/core/css/pageHeader.css";

import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ children, ...props }) =>
  <h1 className="page-header" {...props}>
    {children}
  </h1>;

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default PageHeader;
