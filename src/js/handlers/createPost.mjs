import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);

      const title = formData.get("title");
      const body = formData.get("body");
      const tags = formData.get("tags");
      const media = formData.get("media");

      const tagList = tags.split(" ").map((tag) => tag.trim());
      const post = {
        title: title,
        body: body,
        media: media,
        tags: tagList,
      };

      console.log(post);

      try {
        await createPost(post);
        console.log("Post created successfully");

        if (post.tags) {
          const postTags = document.querySelector("#postTags");
          postTags.innerHTML = `Tags: ${post.tags.join(", ")}`;
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    });
  }
}
