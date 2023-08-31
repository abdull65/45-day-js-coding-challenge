// Get the search input element by its ID
const searchEl = document.getElementById("searchInput");

// Define an array of items
const items = [
  {
    id: 1,
    name: "Apple",
    photo: "./images/apple1.jpg",
    category: "Fruits",
    price: 1.99,
  },
  {
    id: 2,
    name: "Banana",
    photo: "./images/banana1.jpg",
    category: "Fruits",
    price: 0.79,
  },
  {
    id: 3,
    name: "Cherry",
    photo: "./images/cherry1.jpg",
    category: "Fruits",
    price: 2.49,
  },
  {
    id: 4,
    name: "Carrot",
    photo: "./images/.jpg",
    category: "Vegetables",
    price: 0.49,
  },
  {
    id: 5,
    name: "Broccoli",
    photo: "./images/.jpg",
    category: "Vegetables",
    price: 1.29,
  },
  {
    id: 6,
    name: "Cucumber",
    photo: "./images/.jpg",
    category: "Vegetables",
    price: 0.99,
  },
  {
    id: 7,
    name: "Chocolate",
    photo: "./images/.jpg",
    category: "Sweets",
    price: 3.99,
  },
  {
    id: 8,
    name: "Candy",
    photo: "./images/.jpg",
    category: "Sweets",
    price: 1.49,
  },
  {
    id: 9,
    name: "Ice Cream",
    photo: "./images/.jpg",
    category: "Sweets",
    price: 4.99,
  },
  {
    id: 10,
    name: "Apple",
    photo: "./images/apple1.jpg",
    category: "Fruits",
    price: 1.99,
  },
  {
    id: 11,
    name: "Banana",
    photo: "./images/banana1.jpg",
    category: "Fruits",
    price: 0.79,
  },
  {
    id: 12,
    name: "Cherry",
    photo: "./images/cherry1.jpg",
    category: "Fruits",
    price: 2.49,
  },
];

// Get the search result div by its class
const searchResultDiv = document.querySelector(".searchResult");

// Function to search items based on a parameter
const searchItems = function (searchParameter) {
  // Clear previous search results
  searchResultDiv.innerHTML = "";
  // Filter items based on the category
  let filterItems = items.filter((product) => {
    return product.category
      .toLowerCase()
      .includes(searchParameter.toLowerCase());
  });

  // Check if the search input is empty
  if (searchEl === "" || searchEl.value == 0) {
    alert("Please enter the item you are looking for.");
    return;
  }

  // Check if any items match the search
  if (filterItems.length > 0) {
    // Loop through the filtered items and display them
    filterItems.forEach((item) => {
      console.log("Id: " + item.id);
      console.log("Name: " + item.name);
      console.log("Price: " + item.price);
      console.log("Price: " + item.photo);

      // Create paragraph elements for name and price
      const itemFieldBox = document.createElement("div");
      const photoBox = document.createElement("div");
      photoBox.className = "photoBox";
      itemFieldBox.className = "itemBox";
      const nameField = document.createElement("p");
      nameField.className = "item itemName";
      const priceField = document.createElement("p");
      priceField.className = "item priceName";
      const photoField = document.createElement("img");
      photoField.className = "item photoName";

      // Set the inner HTML of the paragraphs
      nameField.innerHTML = `Name: ${item.name}`;
      priceField.innerHTML = `Price: ${item.price}`;
      photoField.src = item.photo;

      // Append the paragraphs to the search result div
      photoBox.appendChild(photoField);
      itemFieldBox.appendChild(nameField);
      itemFieldBox.appendChild(priceField);
      itemFieldBox.appendChild(photoBox);
      searchResultDiv.appendChild(itemFieldBox);
    });
  } else {
    alert("Search not found.");
  }
};

// Add an event listener to the search button
document.getElementById("searchBtn").addEventListener("click", () => {
  // Trim and get the search value
  const searchValue = searchEl.value.trim();
  console.log("Search Value:", searchValue); // Add this line for debugging
  searchItems(searchValue);
});
const buttonsEl = document.querySelectorAll(".catBtn");
buttonsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent.toLowerCase();
    searchEl.value = btnValue;
    console.log(btnValue);
    searchItems(btnValue);
  });
});
