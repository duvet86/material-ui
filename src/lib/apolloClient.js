import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from "subscriptions-transport-ws";
import ApolloClient, { createNetworkInterface } from "apollo-client";

import { getLocalStorageToken } from "lib/localStorageAPI";
import { GRAPHQL_URL, WEBSOCKET_URL } from "lib/constants";

const wsClient = new SubscriptionClient(WEBSOCKET_URL, {
  reconnect: true
});

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_URL
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }

      // get the authentication token from local storage if it exists
      const jwtToken = getLocalStorageToken();
      if (jwtToken) {
        req.options.headers.authorization = `Bearer ${jwtToken.token}`;
      }
      next();
    }
  }
]);

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

// Finally, create your ApolloClient instance with the modified network interface
export default new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});
