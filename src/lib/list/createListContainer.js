import React, { Component } from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";

import TableList from "components/core/TableList";

export default function createListContainer(updateFunc) {
  return withLoading(
    class ApplicationsListContainer extends Component {
      static propTypes = {
        pageTitle: PropTypes.string.isRequired,
        columnHeaders: PropTypes.array.isRequired,
        labelProperty: PropTypes.string.isRequired,
        isLoading: PropTypes.bool.isRequired,
        mutate: PropTypes.func.isRequired,
        itemList: PropTypes.array.isRequired,
        error: PropTypes.string,
        excludeFromItem: PropTypes.array
      };

      state = {
        isActionFeedbackOpen: false,
        actionFeedbackMessage: "",
        isAlertOpen: false,
        alertMessage: "",
        isDeleting: false,
        isError: false,
        idToDelete: null
      };

      _excludedProperties = (this.props.excludeFromItem || [])
        .concat(["id", "isSystem", "__typename"]);

      render() {
        const {
          pageTitle,
          columnHeaders,
          labelProperty,
          itemList,
          location,
          excludeFromItem
        } = this.props;
        const {
          isActionFeedbackOpen,
          actionFeedbackMessage,
          isAlertOpen,
          alertMessage,
          isDeleting,
          isError
        } = this.state;

        return (
          <TableList
            pageTitle={pageTitle}
            columnHeaders={columnHeaders}
            labelProperty={labelProperty}
            excludedProperties={this._excludedProperties}
            excludeFromItem={excludeFromItem}
            itemList={itemList}
            onShowAlert={this._onShowAlert}
            handleAlertClose={this._handleAlertClose}
            location={location}
            isActionFeedbackOpen={isActionFeedbackOpen}
            actionFeedbackMessage={actionFeedbackMessage}
            onActionFeedbackClose={this._onActionFeedbackClose}
            isAlertOpen={isAlertOpen}
            alertMessage={alertMessage}
            isDeleting={isDeleting}
            isError={isError}
          />
        );
      }

      _onShowAlert = (idToDelete, name) =>
        this.setState({
          isAlertOpen: true,
          alertMessage: `Delete ${name}`,
          idToDelete
        });

      _handleAlertClose = ({ currentTarget }) => {
        if (currentTarget && currentTarget.innerText.trim() === "OK") {
          this.setState({
            isDeleting: true
          });

          const variables = { id: this.state.idToDelete };
          const mutatePayload =
            updateFunc == null
              ? { variables }
              : { variables, update: updateFunc };

          this.props
            .mutate(mutatePayload)
            .then(({ data }) => {
              this.setState({
                isActionFeedbackOpen: true,
                actionFeedbackMessage: "Item deleted successfully.",
                isAlertOpen: false,
                isDeleting: false,
                isError: false
              });
            })
            .catch(error => {
              this.setState({
                isActionFeedbackOpen: true,
                actionFeedbackMessage: `Something went wrong: ${error}`,
                isAlertOpen: false,
                isDeleting: false,
                isError: true
              });
              console.error(error);
            });
        } else {
          this.setState({ isAlertOpen: false });
        }
      };

      _onActionFeedbackClose = () =>
        this.setState({
          isActionFeedbackOpen: false
        });
    }
  );
}
