import constants from "lib/constants";
import {
  getLocalStorageToken,
  deleteLocalStorageToken
} from "lib/localStorageAPI";

export function isUserAuthenticated() {
  // attempt to grab the token from localstorage
  const jwtToken = getLocalStorageToken();

  // if it exists
  if (jwtToken) {
    // compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(jwtToken.createdAt);
    const created = Math.round(createdDate.getTime() / 1000);
    const expiry = created + constants.TIME_TO_LIVE;

    // if the token has expired return false
    if (created > expiry) {
      deleteLocalStorageToken();
      return false;
    }

    return true;
  }

  return false;
}
