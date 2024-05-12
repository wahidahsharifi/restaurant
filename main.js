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
// Get the search button and the element to search within
const searchBtn = document.getElementById('pageSearch');
const searchElement = document.querySelector('#text');

// Add an event listener to the search button
searchBtn.addEventListener('click', function () {
  // Ask the user for the search term
  const searchTerm = prompt('What are you searching for?');

  // If the user entered a term, perform the search
  if (searchTerm) {
    // Use window.find() to search the page for the term
    const found = window.find(searchTerm);
    if (!found) {
      alert('Search term not found.');
    }
  }
});