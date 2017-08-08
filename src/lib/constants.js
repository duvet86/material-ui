const SSL = "s";
// process.env.NODE_ENV === "production" ? "s" : "";
const URL = "//sleepy-plains-58280.herokuapp.com";
// process.env.NODE_ENV === "production"
//   ? "//sleepy-plains-58280.herokuapp.com"
//   : "//localhost:8080";

export default {
  TOKEN_NAME: "jwt_token",
  TIME_TO_LIVE: 1209600,
  GRAPHQL_URL: `http${SSL}:${URL}/graphql`,
  WEBSOCKET_URL: `ws${SSL}:${URL}/subscriptions`
};
