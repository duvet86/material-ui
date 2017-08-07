const SSL = "s";
const URL = "//sleepy-plains-58280.herokuapp.com";

export default {
  TOKEN_NAME: "jwt_token",
  TIME_TO_LIVE: 1209600,
  GRAPHQL_URL: `http${SSL}:${URL}/graphql`,
  WEBSOCKET_URL: `ws${SSL}:${URL}/subscriptions`
};
