document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded.");

  const fetchButton = document.getElementById("fetchButton");
  const dogImageContainer = document.getElementById("dogImageContainer");

  fetchButton.addEventListener("click", fetchRandomDog);

  function fetchRandomDog() {
    console.log("Fetching random dog...");

    // API endpoint for a random dog image
    const apiUrl = "https://dog.ceo/api/breeds/image/random";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        // Update the UI with the random dog image
        const imageUrl = data.message;
        displayDogImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching random dog:", error);
        alert("Error fetching random dog. Please try again.");
      });
  }

  function displayDogImage(imageUrl) {
    console.log("Displaying dog image:", imageUrl);
    // Create an image element and set its source
    const dogImage = document.createElement("img");
    dogImage.src = imageUrl;

    // Clear previous images and append the new one
    dogImageContainer.innerHTML = "";
    dogImageContainer.appendChild(dogImage);
  }
});
