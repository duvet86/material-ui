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
        nItemsInPage={this.state.pageComponentIds.length}
        findItemIndexById={this._findItemIndexById}
      />
    );
  }

  _findItemIndexById = itemId =>
    this.state.pageComponentIds.indexOf(itemId);

  _onComponentAdd = id => {
    this.setState(
      update(this.state, {
        pageComponentIds: {
          $push: [id]
        }
      })
    );
  };

  _onPageComponentMove = (itemId, atIndex) => {
    const itemIndex = this._findItemIndexById(itemId);
    this.setState(
      update(this.state, {
        pageComponentIds: {
          $splice: [[itemIndex, 1], [atIndex, 0, itemId]]
        }
      })
    );
  };
}
