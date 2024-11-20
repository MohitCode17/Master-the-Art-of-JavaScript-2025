// 👉 Fetch API

// The Fetch API provides an interface for fetching (sending/receiving) resources. It uses "Request" and "Response" objects.

// 👉 What is API ?

// API stands for Application Programming Interface, and it's a set of rules that allows software applications to communicate with each other.

// APIs act as a messenger between applications, delivering requests to the provider and returning the response.

// Syntax: let promise = fetch(url, [options])

// 👉 Understanding Terms

// 1. AJAX is Asynchronous JS & XML
// 2. JSON is JavaScript Object Notation
// 3. json() method: returns a second promise that resolves with the result of parsing the response body as JSON. (Input is JSON, output is JS object)

// Example:
/*
const url = "https://api.github.com/users/MohitCode17";

const getGithubProfile = async () => {
  let promise = await fetch(url); // will send response as JSON
  let data = await promise.json(); // need to parse JSON using .json()
  console.log(data);
};

getGithubProfile();
*/

// 👉 Simple Project - Github Profile
document.getElementById("fetch-profile").addEventListener("click", async () => {
  const username = document.getElementById("github-username").value.trim();

  // VALIDATION
  if (username === "") {
    alert("Please enter a Github username.");
    return;
  }

  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    // Update profile card with fetched data
    document.querySelector(".profile-pic").src = data.avatar_url;
    document.querySelector(".profile-username").textContent =
      data.name || "No Name";
    document.querySelector(".profile-bio").textContent =
      data.bio || "No Bio Available";
    document.querySelector(".followers-count").textContent =
      data.followers || 0;
    document.querySelector(".following-count").textContent =
      data.following || 0;
    document.getElementById("profile-link").href = data.html_url;
  } catch (error) {}
});
