import axios from "axios";

let allClothes = {}; // Object to store fetched clothes data

// Function to fetch data from the API
const fetchClothes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/clothes");
    allClothes = response.data; // Store the fetched data
    renderClothes(); // Call function to render the clothes
  } catch (error) {
    console.error("Error fetching clothes data:", error); // Log the error to the console
  }
};

// Function to render clothes data into HTML
const renderClothes = () => {
  const clothesWrapper = document.getElementById("product-wrapper");

  if (!clothesWrapper) {
    console.error("Element with ID 'product-wrapper' not found");
    return;
  }

  // Generate HTML for each clothing item
  const html = allClothes
    .map(
      (item) => `
      
      <a href=productDetails.html#${item.id} class="product-card">
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span>${item.price}</span>
      </a>
  `
    )
    .join("");

  clothesWrapper.innerHTML = html; // Insert HTML into the wrapper
};

// Call the fetch function
fetchClothes();
