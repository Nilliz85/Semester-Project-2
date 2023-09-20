import * as postMethods from "../api/posts/index.mjs";

export function postsTemplate(postData) {
  const posts = document.createElement("div");
  posts.classList.add("posts");

  const createdDate = new Date(postData.created);
  const formattedDate = `${createdDate.getDate()}-${createdDate.getMonth() + 1}-${createdDate.getFullYear()} ${createdDate.getHours()}:${createdDate.getMinutes()}`;

  posts.innerHTML = `<div class="card">
  <a href="/post/index.html?id=${postData.id}" class="post-title p-2 " id=${postData.id}>${postData.title} </a> 
  <p class="post-body p-2">${postData.body}</p>
  <div class="p-2" id="postsId" value="${postData.id}">#${postData.id}</div>
 
  <p class="p-1 text-muted">posted: ${formattedDate}</p>
  </div>`;

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("image-size");
    img.src = postData.media;
    img.alt = `Image of ${postData.title}`;
    posts.append(img);
  }

  return posts;
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postsTemplate));
}

async function templates() {
  const posts = await postMethods.getPosts();
  const container = document.getElementById("posts");
  renderPostTemplates(posts, container);
}

templates();
