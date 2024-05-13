// food nav
const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");

function handleIndicator(el) {
   items.forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("style");
   });

   indicator.style.width = `${el.offsetWidth}px`;
   indicator.style.left = `${el.offsetLeft}px`;
   indicator.style.backgroundColor = el.getAttribute("active-color");

   el.classList.add("is-active");
   el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
   item.addEventListener("click", (e) => {
      handleIndicator(e.target);
   });
   item.classList.contains("is-active") && handleIndicator(item);
});

// search
const searchBtn = document.getElementById("pageSearch");
const searchElement = document.querySelector("#text");

searchBtn.addEventListener("click", function () {
   const searchTerm = prompt("What are you searching for?");

   if (searchTerm) {
      const found = window.find(searchTerm);
      if (!found) {
         alert("Search term not found.");
      }
   }
});

// order
let clickDivs = document.querySelectorAll(".img-about div");

clickDivs.forEach((element) => {
   let clicks = 0;
   element.addEventListener("click", function () {
      if (clicks < 99) {
         clicks++;
         element.textContent = `Ordered ${clicks}`;
      }
   });
});
