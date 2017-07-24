import * as constants from "lib/constants";

export function setLocalStorageToken(value) {
  return sessionStorage.setItem(constants.TOKEN_NAME, JSON.stringify(value));
}

export function getLocalStorageToken() {
  return JSON.parse(sessionStorage.getItem(constants.TOKEN_NAME));
}

export function deleteLocalStorageToken() {
  sessionStorage.removeItem(constants.TOKEN_NAME);
}

export function getUserIdFromToken() {
  return getLocalStorageToken().userId;
}
