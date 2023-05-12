/*---------- Registration ----------*/

const API_BASE_URL = "https://nf-api.onrender.com";

// End-Points:
// Register: /api/v1/social/auth/register
// Register: /api/v1/social/auth/login

/**
 * Api call that resister the user
 * @param {string} url
 * @param {any} userData
 * ```js
 * registerUser(registerUrl, userToRegister);
 * ```
 */

/* Without modal */
// async function registerUser(url, userData) {
//   console.log(url, userData);
//   try {
//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     };
//     const response = await fetch(url, postData);
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error);
//   }
// }

/* with modal */
async function registerUser(url, userData) {
  console.log(url, userData);
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    // If the registration was successful, show the success modal
    if (response.status === 201) {
      const modal = new bootstrap.Modal(document.getElementById("successModal"));
      modal.show();
      // Redirect the user to the login page after 3 seconds
      setTimeout(() => {
        window.location.href = "/login.html";
      }, 3000);
    } else {
      // If the registration was not successful, show the error modal
      const modal = new bootstrap.Modal(document.getElementById("errorModal"));
      modal.show();
    }
  } catch (error) {
    console.error(error);
  }
}

const registrationForm = document.querySelector("#registration-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submit behaviour

  // Get the values from the form
  const name = document.querySelector("#account-name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordConfirm = document.querySelector("#password-confirm").value;

  // Check if the passwords match
  if (password !== passwordConfirm) {
    alert("Passwords do not match");
    return;
  }

  // Create the user object
  const userToRegister = {
    name: name,
    email: email,
    password: password,
  };

  const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;
  registerUser(registerUrl, userToRegister);
});

//hardcoded user for testing
// const userToRegister = {
//   name: "pernilsen", // Required
//   email: "pernil58363@stud.noroff.no", // Required
//   password: "bellanutella", // Required
// };

// const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

/*---------- Login ----------*/
//Hardcoded user for testing
// async function loginUser(url, userData) {
//   try {
//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     };
//     const response = await fetch(url, postData);
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//     const accessToken = json.accessToken;
//     localStorage.setItem("accessToken", accessToken);
//   } catch (error) {
//     console.log(error);
//   }
// }
// const userToLogin = {
//   email: "pernil58363@stud.noroff.no",
//   password: "bellanutella",};
// const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
// loginUser(loginUrl, userToLogin);

// select the login form element and add an event listener to it
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // get the form input values
  const email = document.querySelector("#email-input").value;
  const password = document.querySelector("#password-input").value;

  // create the user object to be passed as the second argument to loginUser
  const userToLogin = {
    email: email,
    password: password,
  };

  // make the API call to log in the user
  const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;
  loginUser(loginUrl, userToLogin);
});
