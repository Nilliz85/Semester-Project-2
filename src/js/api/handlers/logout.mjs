import * as storage from "../storage/index.mjs";

export function logoutListener() {
  const logoutButton = document.querySelector("#logoutLink");

  logoutButton.addEventListener("click", () => {
    storage.remove("token");
    storage.remove("profile");
    location.href = "/";
  });
}
