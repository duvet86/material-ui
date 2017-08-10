import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-flexbox-grid";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

import HomeIcon from "material-ui/svg-icons/action/home";
import HelpIcon from "material-ui/svg-icons/action/help";

import muiTheme from "lib/muiTheme";

import PageHeader from "components/core/PageHeader";

export default class NotFound extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme
    };
  }

  render() {
    return (
      <Paper style={{ padding: "60px" }}>
        <Row center="xs">
          <Col xs>
            <PageHeader>404 Not Found</PageHeader>
            <p>Sorry, an error has occured: requested page not found.</p>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs>
            <RaisedButton
              icon={<HomeIcon />}
              label="Take me Home"
              style={{ margin: "12px" }}
            />
          </Col>
          <Col xs>
            <RaisedButton
              icon={<HelpIcon />}
              label="Contact Support"
              style={{ margin: "12px" }}
            />
          </Col>
        </Row>
      </Paper>
    );
  }
}
