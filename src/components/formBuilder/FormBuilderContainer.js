import React, { Component } from "react";
import update from "immutability-helper";

import { components } from "lib/test";
import FormBuilder from "components/formBuilder/FormBuilder";

export default class FormBuilderContainer extends Component {
  static defaultProps = {
    componentsList: components
  };

  constructor(props) {
    super(props);
    this.state = {
      pageComponentIds: []
    };
  }

  render() {
    return (
      <FormBuilder
        componentsList={this.props.componentsList}
        pageComponentIds={this.state.pageComponentIds}
        onComponentAdd={this._onComponentAdd}
        onPageComponentMove={this._onPageComponentMove}
        totOfPageItems={this.state.pageComponentIds.length}
      />
    );
  }

  _onComponentAdd = id => {
    this.setState(
      update(this.state, {
        pageComponentIds: {
          $push: [id]
        }
      })
    );
  };

  _onPageComponentMove = (dragIndex, hoverIndex, elementId) => {
    this.setState(
      update(this.state, {
        pageComponentIds: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, elementId]]
        }
      })
    );
  };
}
