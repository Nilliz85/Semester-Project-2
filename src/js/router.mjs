import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import { loginRedirect } from "./api/helpers/auth.mjs";
import { renderPostTemplate } from "../js/templates/post.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      listeners.setLoginFormListener();
      return;
    case "/profile/register/":
      listeners.setRegisterFormListener();
      return;
    case "/post/create/":
      listeners.setCreatePostFormListener();
      listeners.logoutListener();
      return;
    case "/post/edit/":
      listeners.setUpdatePostListener();
      listeners.logoutListener();
      return;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      listeners.logoutListener();
      return;
    case "/post/index.html":
      listeners.setUpdatePostListener();
      listeners.removePostListener();
      listeners.logoutListener();
      break;
    case "/posts/":
      templates.renderPostTemplates();
      listeners.logoutListener();
      return;
    case "/posts/post.html":
      templates.testPostTemplate();
      listeners.logoutListener();
      return;
    case "/profile/":
      listeners.logoutListener();
      break;
    default:
      break;
  }

  loginRedirect(path);
}
