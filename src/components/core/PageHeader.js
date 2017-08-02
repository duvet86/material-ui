import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const style = {
  pageHeader: {
    paddingBottom: ".3em",
    fontSize: "1.5em",
    margin: ".67em 0",
    textTransform: "uppercase",
    fontWeight: 500
  }
};

const PageHeader = ({ classes: { pageHeader }, children }) =>
  <h1 className={pageHeader}>
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
