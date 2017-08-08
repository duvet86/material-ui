import { graphql, compose } from "react-apollo";

import ChannelListContainer from "components/channelList/ChannelListContainer";
import {
  channelsListQuery,
  newChannelSubscription,
  removeChannelMutation,
  removedChannelSubscription
} from "components/channelList/graphqlQueries";

const channelsListQueryOptions = {
  props: ({
    ownProps,
    data: { loading, channels, error, subscribeToMore }
  }) => ({
    isLoading: loading,
    channels,
    error,
    subscribeToNewChannels: () =>
      subscribeToMore({
        document: newChannelSubscription,
        updateQuery: (prev, { subscriptionData: { data } }) => {
          if (data == null) {
            return prev;
          }

          return Object.assign({}, prev, {
            channels: [...prev.channels, data.channelAdded]
          });
        }
      }),
    subscribeToRemovedChannels: () =>
      subscribeToMore({
        document: removedChannelSubscription,
        updateQuery: (prev, { subscriptionData: { data } }) => {
          if (data == null) {
            return prev;
          }

          return Object.assign({}, prev, {
            channels: prev.channels.filter(c => c.id !== data.channelRemoved)
          });
        }
      })
  })
};

const makeQuery = compose(
  graphql(removeChannelMutation, { name: "removeChannelMutation" }),
  graphql(channelsListQuery, channelsListQueryOptions)
);

export default makeQuery(ChannelListContainer);
