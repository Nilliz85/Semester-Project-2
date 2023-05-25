import { getPost, updatePost } from "../api/posts/index.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = document.querySelector("button");
    button.disabled = true;
    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags.join(" ");
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const updatedPost = Object.fromEntries(formData.entries());
      updatedPost.id = id;

      const tags = formData.get("tags");
      const tagList = tags.split(" ").map((tag) => tag.trim());
      updatedPost.tags = tagList;

      try {
        await updatePost(updatedPost);
        console.log("Post updated successfully");

        if (updatedPost.tags) {
          const postTags = document.querySelector("#postTags");
          postTags.innerHTML = `Tags: ${updatedPost.tags.join(", ")}`;
        }
      } catch (error) {
        console.error("Error updating post:", error);
      }
    });
  }
}
