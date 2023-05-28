import * as listeners from "./handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/login/":
      listeners.setLoginFormListener();
      return;
    case "/profile/register/":
      listeners.setRegisterFormListener();
      return;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      return;
    case "/post/create/":
      listeners.setCreatePostFormListener();
      return;
    case "/post/edit/":
      listeners.setUpdatePostListener();
      return;
    case "/posts":
      templates.testPostsTemplate();
      return;
    case "/posts/post.html":
      templates.testPostTemplate();
      return;
    default:
      break;
  }
}

async function testPostsTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
  console.log(posts);
}

testPostsTemplate();

async function testPostTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts[54];
  const container = document.querySelector("#post");
  templates.renderPostTemplate(post, container);
}

testPostTemplate();
