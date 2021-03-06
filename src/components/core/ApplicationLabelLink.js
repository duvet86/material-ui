import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";

const style = {
  linkContainer: {
    border: "10px",
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    tapHighlightColor: "rgba(0, 0, 0, 0)",
    cursor: "pointer",
    textDecoration: "none",
    margin: "0px",
    padding: "0px",
    outline: "none",
    fontSize: "inherit",
    fontWeight: "inherit",
    position: "relative",
    zIndex: "1",
    height: "36px",
    lineHeight: "36px",
    minWidth: "88px",
    color: "white",
    transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
    borderRadius: "2px",
    userSelect: "none",
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0)",
    textAlign: "center"
  },
  spanStyle: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    overflow: "hidden",
    pointerEvents: "none"
  },
  label: {
    position: "relative",
    paddingLeft: "16px",
    paddingRight: "16px",
    verticalAlign: "middle",
    letterSpacing: "0px",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: "14px"
  }
};

const ApplicationLabelLink = ({
  classes: { linkContainer, spanStyle, label },
  appKey,
  appLabel
}) =>
  <Link className={linkContainer} to={`/${appKey}/`}>
    <span className={spanStyle} />
    <span className={label}>
      {appLabel}
    </span>
  </Link>;

ApplicationLabelLink.propTypes = {
  appKey: PropTypes.string.isRequired,
  appLabel: PropTypes.string.isRequired
};

export default injectSheet(style)(ApplicationLabelLink);
