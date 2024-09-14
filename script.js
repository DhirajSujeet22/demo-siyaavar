// Get the search button and the popup
const searchButton = document.getElementById("searchButton");
const searchPopup = document.getElementById("searchPopup");
const closePopup = document.getElementById("closePopup");

// Show the popup when search button is clicked
searchButton.addEventListener("click", () => {
  searchPopup.style.display = "flex";
});

// Hide the popup when close button is clicked
closePopup.addEventListener("click", () => {
  searchPopup.style.display = "none";
});

// Hide popup when user clicks outside the popup content
window.addEventListener("click", (event) => {
  if (event.target == searchPopup) {
    searchPopup.style.display = "none";
  }
});
