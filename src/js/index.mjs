import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
} else if (path === "/profile/edit/") {
  listeners.setUpdateProfileListener();
}

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const container = document.querySelector("#posts");
//   templates.renderPostTemplates(posts, container);
// }

// testTemplate();

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const container = document.querySelector("#posts");
//   templates.renderPostTemplate(post, container);
// }

// testTemplate();
