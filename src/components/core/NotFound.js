import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Row, Col } from "react-flexbox-grid";
import HomeIcon from "material-ui/svg-icons/action/home";
import HelpIcon from "material-ui/svg-icons/action/help";

import PageHeader from "components/core/PageHeader";

const NotFound = () =>
  <div>
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
  </div>;

export default NotFound;
