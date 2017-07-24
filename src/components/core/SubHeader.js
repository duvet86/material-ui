import "components/core/css/subHeader.css";

import React from "react";
import PropTypes from "prop-types";

const SubHeader = ({ children, ...props }) =>
  <h2 className="sub-header" {...props}>
    {children}
  </h2>;

SubHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default SubHeader;
