export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");

  const title = document.createElement("h2");
  title.innerText = postData.title;
  post.appendChild(title);

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.appendChild(img);
  }

  const body = document.createElement("p");
  body.innerText = postData.body;
  post.appendChild(body);

  return post;
}

export function renderPostTemplate(postData, parent) {
  const postContainer = document.getElementById(parent);
  const postElement = postTemplate(postData);
  postContainer.innerHTML = "";
  postContainer.appendChild(postElement);
}
