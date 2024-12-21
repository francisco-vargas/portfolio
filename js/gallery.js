const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabContainer");

tabLinks.forEach(function (tabLinkElement, index) {
  tabLinkElement.addEventListener("click", function () {
    // Hide all elements "tabContainer"
    tabContents.forEach(function (tabContentElement) {
      tabContentElement.classList.add("hidden");
    });

    // Remove class "active" from all "tablinks"
    tabLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Show element "tabContainer" corresponding to button clicked
    tabContents[index].classList.remove("hidden");

    // Add class "active" only to button clicked
    tabLinkElement.classList.add("active");
  });
});
