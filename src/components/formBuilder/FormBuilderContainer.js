import React, { Component } from "react";
import update from "immutability-helper";

import withLoading from "lib/withLoading";

import FormBuilder from "components/formBuilder/FormBuilder";

class FormBuilderContainer extends Component {
  state = { pageItemIds: [] };

  render() {
    return (
      <FormBuilder
        draggableItemList={this.props.formItems}
        pageItemIds={this.state.pageItemIds}
        onItemAdd={this._onItemAdd}
        onPageItemMove={this._onPageItemMove}
        onPageItemRemove={this._onPageItemRemove}
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

  _onPageItemRemove = indexToRemove => {
    this.setState(
      update(this.state, {
        pageItemIds: {
          $splice: [[indexToRemove, 1]]
        }
      })
    );
  };
}

export default withLoading(FormBuilderContainer);
