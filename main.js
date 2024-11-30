/*
   food nav
*/
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
/*
   search
*/
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

/*
   cart
*/

// open & close

function slideCart(para) {
   const cart = document.getElementById("cart");
   para ? cart.classList.add("cartShow") : cart.classList.remove("cartShow");
}

document.querySelector("#cart .ExitCart").addEventListener("click", () => {
   slideCart(false)
});

document.getElementById("openCart").addEventListener("click", () => {
   slideCart(true)
});

// checkbox & count

const checkbox = document.querySelector(".cartTop input");
const checkboxs = document.querySelectorAll(".cartItems input");
let checkCount = 0;

document.querySelector(".cartTop input").addEventListener("click", (e) => {
   if (e.srcElement.checked) {
      checkboxs.forEach((check) => {
         check.checked = true;
         totalItems(true);
      });
   } else {
      checkboxs.forEach((check) => {
         check.checked = false;
         checkCount = 0;
      });
   }
   document.querySelector(".amount1").textContent = checkCount;
});

function itemstate() {
   const checks = document.querySelectorAll(".cartItems input");

   checks.forEach((check) => {
      check.addEventListener("click", (e) => {
         checkTest();
      });
   });
}

function checkTest() {
   let checkStatus = 1;
   checkCount = 0;
   const checks = document.querySelectorAll(".cartItems input");

   checks.forEach((c) => {
      if (c.checked) {
         checkCount += 1;
      }
      c.checked && checkStatus == 1 ? 1 : (checkStatus = 0);
   });
   document.querySelector(".amount1").textContent = checkCount;
   checkStatus == 1 ? (checkbox.checked = true) : (checkbox.checked = false);
}

itemstate();
totalItems();

function totalItems(e) {
   let checkAmount = 0;
   const checks = document.querySelectorAll(".cartItems input");
   checks.forEach((check) => {
      checkAmount += 1;
   });
   document.querySelector(".amount2").textContent = checkAmount;
   if ((e = true)) {
      checkCount = checkAmount;
   }
   document.querySelector('#openCart span').style.display = checkAmount > 0 ? 'block' : 'none';
}

// delete

document.querySelectorAll(".itemStatus > img").forEach((del) => {
   del.addEventListener("click", (e) => {
      const target = e.target.parentNode.parentNode;
      target.classList.add("itemRemove");
      target.addEventListener("transitionend", () => {
         target.querySelector("input").checked = false;
         target.remove();
         totalItems();
         checkTest();
      });
   });
});

/*
   favorites
*/

// s

/*
   order
*/

// amount

document.addEventListener("DOMContentLoaded", () => {
   const increaseButtons = document.querySelectorAll(".increase");
   const decreaseButtons = document.querySelectorAll(".decrease");
   const quantities = document.querySelectorAll(".quantity");
   const orderButtons = document.querySelectorAll(".order");

   increaseButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
         let currentQuantity = parseInt(quantities[index].textContent);
         currentQuantity++;
         quantities[index].textContent = currentQuantity;
      });
   });

   decreaseButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
         let currentQuantity = parseInt(quantities[index].textContent);
         if (currentQuantity > 0) {
            currentQuantity--;
            quantities[index].textContent = currentQuantity;
         }
      });
   });

   orderButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
         quantities[index].textContent = 0;
      });
   });
});

// pop up

const updateInnerHTML = (selector, html) => {
   document.querySelectorAll(selector).forEach((one) => (one.innerHTML = html));
};

const appendTextContent = (selector, text) => {
   document
      .querySelectorAll(selector)
      .forEach((one) => (one.textContent += text));
};

updateInnerHTML(
   ".svgContainer",
   `
   <img loading="lazy" class="bigFoodImg">
   <img src="files/img/else/arrow.svg" alt="" class="arrow exitArrow">
   <svg class="love" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px">
      <path d="m480-120.67-46.67-42q-104.33-95-172.33-164-68-69-108.33-123.5-40.34-54.5-56.5-99.16Q80-594 80-640q0-91.33 61.33-152.67 61.34-61.33 152-61.33 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 61.33Q880-731.33 880-640q0 46-16.17 90.67-16.16 44.66-56.5 99.16Q767-395.67 699-326.67t-172.33 164l-46.67 42Z" />
   </svg>`
);

document.querySelectorAll(".img-center > div > img").forEach((food) => {
   food.addEventListener("click", () => {
      document.querySelectorAll(".bigFoodImg").forEach((one) => {
         one.src = food.src;
      });
      food.classList.add("showMenu");
      document.querySelector("body").style.overflow = "hidden";
      document.querySelectorAll(".exitArrow").forEach((foody) => {
         foody.addEventListener("click", () => {
            food.classList.remove("showMenu");
            document.querySelector("body").style.overflow = "auto";
         });
      });
   });
});

document
   .querySelectorAll(".img-about-content > div:first-child")
   .forEach((one) => {
      const items = document.querySelectorAll(".star");
      const length = items.length;
      let counter = 1;
      for (let i = 0; i < length; i++) {
         counter = (counter % 5) + 1;
      }
      one.insertAdjacentHTML(
         "beforeend",
         `<div class="amount">
            <div class="star star${counter}"></div>
            <div class="amounty">
               <div class="decrease"></div>
               <div class="quantity">0</div>
               <div class="increase"></div>
            </div>
         </div>
         <h3>description</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore amet doloribus, rem, nihil ipsam odio veniam debitis vero ducimus itaque nostrum in nesciunt iure tenetur optio numquam sit perferendis esse!</p>`
      );
   });
appendTextContent(".order", "add to card");
/*
   comments
*/

const elements = ["#wahid", "#salaam", "#elyas"].map((id) =>
   document.querySelector(id)
);
const labels = [".label1", ".label2", ".label3"].map((cls) =>
   document.querySelector(cls)
);

let counter = 0;

const updateComment = () => {
   elements.forEach(
      (el, index) => (el.style.display = index === counter ? "flex" : "none")
   );
   labels.forEach(
      (label, index) =>
         (label.style.backgroundColor = index === counter ? "#f00" : "#000")
   );
};

labels.forEach((label, index) => {
   label.addEventListener("click", () => {
      counter = index;
      updateComment();
   });
});

document.querySelector("#rightArrow").addEventListener("click", () => {
   counter = (counter + 1) % elements.length;
   updateComment();
});

document.querySelector("#leftArrow").addEventListener("click", () => {
   counter = (counter - 1 + elements.length) % elements.length;
   updateComment();
});

updateComment();
