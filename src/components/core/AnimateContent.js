import "components/core/css/animateContent.css";

import React from "react";
import PropTypes from "prop-types";

const AnimateContent = ({ children }) => {
  return (
    <div className="animate-content">
      {children}
    </div>
  );
};

AnimateContent.propTypes = {
  children: PropTypes.element.isRequired
};

export default AnimateContent;
