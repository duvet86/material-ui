import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = {
  "@keyframes animatecontent": {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  },
  animateContent: {
    position: "relative",
    animationName: "animatecontent",
    animationDuration: "1s"
  }
};

const AnimateContent = ({ classes: { animateContent }, children }) => {
  return (
    <div className={animateContent}>
      {children}
    </div>
  );
};

AnimateContent.propTypes = {
  children: PropTypes.element.isRequired
};

export default injectSheet(styles)(AnimateContent);
