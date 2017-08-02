import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const style = {
  subHeader: {
    paddingBottom: "10px",
    borderBottom: "1px solid #eee"
  }
};

const SubHeader = ({ classes: { subHeader }, children, ...props }) =>
  <h2 className={subHeader} {...props}>
    {children}
  </h2>;

SubHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default injectSheet(style)(SubHeader);
