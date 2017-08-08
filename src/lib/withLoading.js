import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";

import Spinner from "components/core/Spinner";
import AnimateContent from "components/core/AnimateContent";

export default function withLoading(WrappedComponent, showSpinner = false) {
  return class extends Component {
    render() {
      const { isLoading, error } = this.props;

      if (error) {
        return (
          <Row center="xs">
            <Col xs={6}>
              <h3>
                {error
                  ? JSON.stringify(error)
                  : "Error! Component failed to load."}
              </h3>
            </Col>
          </Row>
        );
      }
      if (isLoading) {
        return showSpinner
          ? <Row center="xs">
              <Col xs={6}>
                <Spinner />
              </Col>
            </Row>
          : null;
      }

      return (
        <AnimateContent>
          <WrappedComponent {...this.props} />
        </AnimateContent>
      );
    }
  };
}
