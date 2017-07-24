import React, { Component } from "react";

import { components } from "lib/test";
import PageBuilder from "components/pageBuilder/PageBuilder";

export default class PageBuilderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { components };
  }

  render() {
    return <PageBuilder components={this.state.components} />;
  }
}
