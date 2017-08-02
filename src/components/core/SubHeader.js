import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const style = {
  subHeader: {
    paddingTop: ".8em",
    textTransform: "uppercase",
    fontSize: "1.2em",
    fontWeight: 400
  }
};

const SubHeader = ({ classes: { subHeader }, children }) =>
  <h2 className={subHeader}>
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
