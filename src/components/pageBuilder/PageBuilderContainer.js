import React, { Component } from "react";

import { components } from "lib/test";
import PageBuilder from "components/pageBuilder/PageBuilder";

export default class PageBuilderContainer extends Component {
  static defaultProps = {
    componentsList: components
  };

  constructor(props) {
    super(props);
    this.state = {
      pageComponents: []
    };
  }

  render() {
    return (
      <PageBuilder
        componentsList={this.props.componentsList}
        pageComponents={this.state.pageComponents}
      />
    );
  }

  _addComponentToPage = () 
}
