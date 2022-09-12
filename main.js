const primaryHeader = document.querySelector(".header-container");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
  } else {
    navToggle.setAttribute("aria-expanded", true);
  }
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
