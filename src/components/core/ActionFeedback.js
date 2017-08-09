import React from "react";
import PropTypes from "prop-types";
import Snackbar from "material-ui/Snackbar";

const ActionFeedback = ({ isOpen, message, duration, error, onRequestClose }) => {
  const backgroundColor = error ? "rgb(255, 87, 34)" : "#00C853";

  return (
    <Snackbar
      bodyStyle={{ backgroundColor }}
      open={isOpen}
      message={message}
      autoHideDuration={error ? false : duration || 4000}
      onRequestClose={onRequestClose}
    />
  );
};

ActionFeedback.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  error: PropTypes.bool
};

export default ActionFeedback;
