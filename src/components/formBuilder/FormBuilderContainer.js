import React, { Component } from "react";
import update from "immutability-helper";

import { components } from "lib/test";
import FormBuilder from "components/formBuilder/FormBuilder";

export default class FormBuilderContainer extends Component {
  static defaultProps = {
    draggableItemList: components
  };
  state = { pageItemIds: [] };

  render() {
    return (
      <FormBuilder
        draggableItemList={this.props.draggableItemList}
        pageItemIds={this.state.pageItemIds}
        onItemAdd={this._onItemAdd}
        onPageItemMove={this._onPageItemMove}
        nItemsInPage={this.state.pageItemIds.length}
      />
    );
  }

  _onItemAdd = id => {
    this.setState(
      update(this.state, {
        pageItemIds: {
          $push: [id]
        }
      })
    );
  };

  _onPageItemMove = (dragIndex, hoverIndex, itemId) => {
    this.setState(
      update(this.state, {
        pageItemIds: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, itemId]]
        }
      })
    );
  };
}
