import React from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "components/core/LoadingSpinner";

const Loading = ({ isLoading, error, pastDelay }) => {
  if (error) {
    return (
      <div>
        {JSON.stringify(error)}
      </div>
    );
  }
  if (isLoading) {
    return pastDelay ? <LoadingSpinner /> : null;
  }

  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  pastDelay: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default Loading;
