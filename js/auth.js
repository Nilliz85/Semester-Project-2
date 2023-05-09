/*---------- Registration ----------*/

const API_BASE_URL = "https://nf-api.onrender.com";

// End-Points:
// Register: /api/v1/social/auth/register

async function registerUser(url, userData) {
  console.log(url, userData);
  try {
    // Fetch data from API
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

registerUser(registerUrl, userToRegister);

// /api/v1/social/auth/register

// fetch("https://nf-api.onrender.com/api/v1/social/auth/register")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// const registerUser = async (userData) => {
//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to register user");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Example usage
// const newUser = {
//   name: "my_username",
//   email: "first.last@stud.noroff.no",
//   password: "UzI1NiIsInR5cCI",
// };

// registerUser(newUser)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
