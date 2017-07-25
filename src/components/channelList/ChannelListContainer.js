import React, { Component } from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";

import PageHeader from "components/core/PageHeader";
import ChannelList from "components/channelList/ChannelList";
import AddChannelContainer from "components/channelList/AddChannelContainer";
import { channelsListQuery } from "components/channelList/graphqlQueries";

class ChannelListContainer extends Component {
  componentDidMount() {
    this.props.subscribeToNewChannels();
    this.props.subscribeToRemovedChannels();
  }

  render() {
    const { channels } = this.props;
    return (
      <div>
        <PageHeader>Channel List</PageHeader>
        <AddChannelContainer />
        <ChannelList
          channels={channels}
          handleDeleteChannel={this._handleDeleteChannel}
        />
      </div>
    );
  }

  _handleDeleteChannel = id => {
    const { removeChannelMutation } = this.props;
    removeChannelMutation({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        removeChannel: {
          __typename: "ID!",
          id: id
        }
      },
      update: (store, { data: { removeChannel } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: channelsListQuery });
        const index = data.channels.findIndex(c => {
          return c.id === removeChannel;
        });
        if (index === -1) {
          return;
        }

        data.channels.splice(index, 1);
        // Write our data back to the cache.
        store.writeQuery({ query: channelsListQuery, data });
      }
    }).then(res => {});
  };
}

ChannelListContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  channels: PropTypes.array
};

export default withLoading(ChannelListContainer);
