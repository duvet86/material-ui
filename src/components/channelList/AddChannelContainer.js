import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";

import {
  channelsListQuery,
  addChannelMutation
} from "components/channelList/graphqlQueries";
import AddChannel from "components/channelList/AddChannel";

const ENTER_KEY_CODE = 13;

class AddChannelContainer extends PureComponent {
  render() {
    return <AddChannel handleKeyUp={this._handleKeyUp} />;
  }

  _handleKeyUp = evt => {
    const targetValue = evt.target.value;
    if (evt.keyCode !== ENTER_KEY_CODE || targetValue.trim() === "") {
      return;
    }

    evt.target.value = "";
    const { mutate } = this.props;
    mutate({
      variables: { name: targetValue },
      optimisticResponse: {
        __typename: "Mutation",
        addChannel: {
          __typename: "Channel",
          id: -1,
          name: targetValue
        }
      },
      update: (store, { data: { addChannel } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: channelsListQuery });
        const index = data.channels.findIndex(c => {
          return c.id === addChannel.id;
        });
        if (index !== -1) {
          return;
        }

        addChannel.id = `#${data.channels.length + 1}`;
        data.channels.push(addChannel);
        // Write our data back to the cache.
        store.writeQuery({ query: channelsListQuery, data });
      }
    }).then(res => {});
  };
}

AddChannelContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default graphql(addChannelMutation)(AddChannelContainer);
