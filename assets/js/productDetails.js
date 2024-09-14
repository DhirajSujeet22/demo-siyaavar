import axios from "axios";

// ==================================

let allClothes = {};

const fetchClothes = async () => {
  const loader = document.querySelector(".loader");
  const hash = window.location.hash;
  const id = hash ? hash.substring(1) : null;

  if (!id) {
    console.error("No ID found in the URL hash");
    return;
  }

  // Show the loader
  loader.classList.remove("hidden");

  try {
    const response = await axios.get(`http://localhost:3000/clothes/${id}`);
    allClothes = response.data;
    console.log(allClothes);
    renderClothes();
  } catch (error) {
    console.error("Error fetching clothes data:", error);
  } finally {
    // Hide the loader
    loader.classList.add("hidden");
  }

  //   --------------------------------------------------------

  const product_item = document.querySelector(".product_item");
  const product_imgs = document.querySelectorAll(".product_img img");
  const product_title = document.querySelector(".product_title");
  const product_price = document.querySelector(".product_price");
  const product_description = document.querySelector(".product_description");

  product_imgs.forEach((img) => {
    img.src = allClothes.image;
  });

  product_item.innerText = allClothes.item;
  product_title.innerText = allClothes.title;
  product_price.innerText = allClothes.price;
  product_description.innerText = allClothes.description;

  console.log(allClothes);
};

fetchClothes();
