import React, { Component } from "react";

import LoadingSpinner from "components/core/LoadingSpinner";
import AnimateContent from "components/core/AnimateContent";

export default function withLoading(WrappedComponent, showSpinner = false) {
  return class extends Component {
    render() {
      const { isLoading, error } = this.props;
      if (error) {
        return (
          <h3 className="text-danger">
            <i className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {error ? JSON.stringify(error) : "Error! Component failed to load."}
          </h3>
        );
      }
      if (isLoading) {
        return showSpinner ? <LoadingSpinner /> : null;
      }

      return (
        <AnimateContent>
          <WrappedComponent {...this.props} />
        </AnimateContent>
      );
    }
  };
}
