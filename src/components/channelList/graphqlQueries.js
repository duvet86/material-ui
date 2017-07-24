import { gql } from "react-apollo";

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

const removeChannelMutation = gql`
  mutation removeChannel($id: ID!) {
    removeChannel(id: $id)
  }
`;

const channelsListQuery = gql`
  query channelsListQuery {
    channels {
      id
      name
    }
  }
`;

const newChannelSubscription = gql`
  subscription onChannelAdded {
    channelAdded {
      id
      name
    }
  }
`;

const removedChannelSubscription = gql`
  subscription onChannelRemoved {
    channelRemoved
  }
`;

export {
  addChannelMutation,
  removeChannelMutation,
  channelsListQuery,
  newChannelSubscription,
  removedChannelSubscription
};
