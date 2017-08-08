import React from "react";
import PropTypes from "prop-types";
import Snackbar from "material-ui/Snackbar";

const ActionFeedback = ({ isOpen, message, duration, error }) => {
  const backgroundColor = error ? "rgb(255, 87, 34)" : "#00C853";

  return (
    <Snackbar
      bodyStyle={{ backgroundColor }}
      open={isOpen}
      message={message}
      autoHideDuration={error ? false : duration || 6000}
    />
  );
};

ActionFeedback.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  error: PropTypes.bool
};

export default ActionFeedback;
