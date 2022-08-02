// WINDOW HEADER SCROLL ANIMATION EFFECT

window.addEventListener("load", () => {
  // Scroll Animation
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // Accordions
  let accordionIcons = document.querySelectorAll(
    ".section__accordion_small_box_content_strelka"
  );
  let accordionParagraph = document.querySelectorAll(
    ".section__accordion_small_box_paragraph"
  );
  for (let i = 0; i < accordionIcons.length; i++) {
    accordionIcons[i].addEventListener("click", () => {
      accordionIcons[i].classList.toggle("active");
      accordionParagraph[i].classList.toggle("active");
    });
  }

  // Navbar
  let fabars = document.querySelector(".fa-bars");
  let faTimes = document.querySelector(".fa-times");
  let navbar = document.querySelector(".secret");
  let links = navbar.querySelectorAll(".secret__link");
  let secretForm = document.querySelector(".secret__form");
  let secretForms = secretForm.querySelectorAll(".secret_forms");
  faTimes.addEventListener("click", closeNavbar);

  function closeNavbar() {
    if (!navbar.classList.add("active")) {
      navbar.classList.remove("active");
    }
  }

  fabars.addEventListener("click", openNavbar);

  function openNavbar() {
    if (!navbar.classList.add("active")) {
      navbar.classList.add("active");
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", closeNavbar);
  });

  secretForms.forEach((item) => {
    item.addEventListener("click", closeNavbar);
  });
});
