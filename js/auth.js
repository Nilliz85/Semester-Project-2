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
  } catch (error) {
    console.error(error);
  }
}

const userToRegister = {
  name: "pernilsen", // Required
  email: "pernil58363@stud.noroff.no", // Required
  password: "bellanutella", // Required
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

/*---------- Login ----------*/

async function loginUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
}

const userToLogin = {
  email: "pernil58363@stud.noroff.no",
  password: "bellanutella",
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

loginUser(loginUrl, userToLogin);
