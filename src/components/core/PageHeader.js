import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const style = {
  pageHeader: {
    marginTop: 0
  }
};

const PageHeader = ({ classes: { pageHeader }, children, ...props }) =>
  <h1 className={pageHeader} {...props}>
    {children}
  </h1>;

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default injectSheet(style)(PageHeader);
