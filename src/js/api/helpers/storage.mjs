import * as storage from "../../storage/index.mjs";

export function isloggedIn() {
  return storage.load("token") ? true : false;
}

export function getName() {
  return storage.get("name");
}
