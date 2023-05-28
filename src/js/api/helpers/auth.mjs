import { isloggedIn } from "./storage.mjs";

export function loginRedirect(path) {
  if (isloggedIn()) {
    if (path === "/profile/login/" || path === "/profile/register/") {
      location.href = "/posts/";
    }
  } else {
    if (path !== "/" && path !== "/profile/login/" && path !== "/profile/register/") {
      location.href = "/";
    }
  }
}
