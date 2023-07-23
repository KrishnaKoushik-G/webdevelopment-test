import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronic.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"





let inputSearchEl = document.querySelector(".inputSearch")
let recentInput = []
let formInputEl = document.getElementById("inputForm")
const listofRecentEl = document.querySelector(".listofRecent")



inputSearchEl.addEventListener("keydown", () => {
    // console.log(inputSearchEl)
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value)
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl
    }
})

/*function reuble*****/
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}


/****womenEthnic */
renderSubMenu("womenEthic", WomenEthnic)

/****WomenWestern */
renderSubMenu("womenWestern", WomenWestern)

//Men 
renderSubMenu("men", Men)

/***kids */
renderSubMenu("kids", Kids)

/**home % kitchen */
renderSubMenu("HomeAndKitchen", HomeAndKitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth", BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWarId", BagsFootwear)

// Electronics
renderSubMenu("ElectronicsId", Electronics)


/**********product section***************/
import ProductData from "./meesho/data.js"

const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)


let filterData = []

document.addEventListener("click", (e) => {


    const bluetoothEl = document.getElementById("bluetooth").checked
    const ChainsEl = document.getElementById("chains").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked

    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch"
    ))

    renderProductData()


})

function renderProductData() {
    let filterDataHTML = "";
  
    if (filterData[0]) {
      filterData.forEach((el) => {
        filterDataHTML += `
          <div class="productCard" data-product-id="${el.id}">
            <div class="product_image">
              <img src="./meesho/productImage/${el.img}" />
            </div>
            <h3 class="product_name">${el.name}</h3>
            <p class="product_price">
              <span>₹</span>
              <span>${el.price}</span>
              <span font-size="12px" font-weight="demi" color="greyT2" class="onwards">onwards</span>
            </p>
            <div class="freedel" color="white">
              <div class="freedel1">
                <span font-size="12px" font-weight="demi" color="greyT1" class="freedel2">Free Delivery</span>
              </div>
            </div>
            <div class="rating">
              <span label="${el.rating}" class="rating1">
                <span font-size="16px" font-weight="demi" color="#ffffff" class="rating2">${el.rating}</span>
                <svg width="8" height="8" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" ml="4" iconSize="10" class="rating3">
                  <g clip-path="url(#clip0)">
                    <path d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z" fill="white"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="19.08" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span font-size="12px" font-weight="demi" color="greyT2" class="review">${el.review} Reviews</span>
            </div>
          </div>
        `;
      });
    } else {
      ProductData.forEach((el) => {
        filterDataHTML += `
          <div class="productCard" data-product-id="${el.id}">
            <div class="product_image">
              <img src="./meesho/productImage/${el.img}" />
            </div>
            <h3 class="product_name">${el.name}</h3>
            <p class="product_price">
              <span>₹</span>
              <span>${el.price}</span>
              <span font-size="12px" font-weight="demi" color="greyT2" class="onwards">onwards</span>
            </p>
            <div class="freedel" color="white">
              <div class="freedel1">
                <span font-size="12px" font-weight="demi" color="greyT1" class="freedel2">Free Delivery</span>
              </div>
            </div>
            <div class="rating">
              <span label="${el.rating}" class="rating1">
                <span font-size="16px" font-weight="demi" color="#ffffff" class="rating2">${el.rating}</span>
                <svg width="8" height="8" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" ml="4" iconSize="10" class="rating3">
                  <g clip-path="url(#clip0)">
                    <path d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z" fill="white"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="19.08" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span font-size="12px" font-weight="demi" color="greyT2" class="review">${el.review} Reviews</span>
            </div>
          </div>
        `;
      });
    }
  
    document.getElementById("product_category_displayId").innerHTML = filterDataHTML;
  }  
  document.getElementById("product_category_displayId").addEventListener("click", (e) => {
    // Traverse up the DOM tree to find the closest product card element
    const productCard = e.target.closest(".productCard");
  
    // Check if a product card was found
    if (productCard) {
      showProductDetails(productCard.dataset.productId); // Assuming each product card has a unique "data-product-id" attribute
    }
  });
  
  // Function to generate and display the product details modal
  function displayProductDetails(product) {
    // Create the modal container
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("productModal");
  
    // Construct the modal content
    const modalContent = `
      <div class="modalContent">
        <span class="closeModal">&times;</span>
        <img src="./meesho/productImage/${product.img}" alt="${product.name}" width="100" />
        <h3>${product.name}</h3>
        <p class="productDesc">${product.desc}</p>
        <p class="productPrice">Price: ₹${product.price}</p>
        <p class="productRating">Rating: ${product.rating}</p>
        <p class="productReview">Reviews: ${product.review}</p>
        <div class="btnContainer">
          <button class="addToCartBtn">Add to Cart</button>
          <button class="closeBtn closeModal">Close</button>
        </div>
      </div>
    `;
  
    modalContainer.innerHTML = modalContent;
  
    // Add the modal to the DOM
    document.body.append(modalContainer);
  
    // Function to close the product details modal
    function closeModal() {
      modalContainer.remove();
    }
  
    // Add event listener to close the modal when the "Add to Cart" button is clicked
    const addToCartBtn = modalContainer.querySelector(".addToCartBtn");
    addToCartBtn.addEventListener("click", () => {
      closeModal();
      // Display an alert when "Add to Cart" is clicked
      alert(`${product.name} added to cart!`);
    });
  
    // Add event listener to close the modal when the close button is clicked
    const closeBtn = modalContainer.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      closeModal();
      // Return to the main page when the "Close" button is clicked
      renderProductData();
    });
  
    // Add event listener to close the modal when the overlay is clicked
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        closeModal();
        // Return to the main page when the modal overlay is clicked
        renderProductData();
      }
    });
  }
  
  
  // Modify the showProductDetails function to call displayProductDetails
  function showProductDetails(id) {
    const product = ProductData.find((item) => item.id === id);
    if (product) {
      displayProductDetails(product);
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      alert("Product not found!");
    }
  }  
  
  renderProductData();