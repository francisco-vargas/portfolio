const menuBtnContainer = document.querySelector(".menu-button-container");
const menuContainer = document.querySelector(".mobile-links-container");
const menuBtn = document.querySelector(".menu-button");
const menuCloseBtn = document.querySelector(".menu-close-button");
const topMenuDesktop = document.querySelector(".top-menu-desktop");

const menuElements = [menuContainer, menuBtn, menuCloseBtn];

menuBtnContainer.addEventListener("click", function () {
  for (let i = 0; i < menuElements.length; i++) {
    if (menuElements[i].classList.contains("hidden")) {
      menuElements[i].classList.remove("hidden");
    } else {
      menuElements[i].classList.add("hidden");
    }
  }
});

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
