// WINDOW HEADER SCROLL ANIMATION EFFECT

window.addEventListener("load", () => {
  // Scroll Animation
  window.addEventListener("scroll", () => {
    $(".header").classList.toggle("active", window.scrollY > 0);
  });

  // Accordions
  for (let i = 0; i < $$(".section__accordion_small_box_content_strelka").length; i++) {
    $$(".section__accordion_small_box_content_strelka")[i].addEventListener("click", () => {
      $$(".section__accordion_small_box_content_strelka")[i].classList.toggle("active");
      $$(".section__accordion_small_box_paragraph")[i].classList.toggle("active");
    });
  }

  // Navbar
  $(".fa-times").addEventListener("click", closeNavbar);

  function closeNavbar() {
    if (!$(".secret").classList.add("active")) {
      $(".secret").classList.remove("active");
    }
  }

  $(".fa-bars").addEventListener("click", openNavbar);

  function openNavbar() {
    if (!$(".secret").classList.add("active")) {
      $(".secret").classList.add("active");
    }
  }

  $$(".secret__link").forEach((link) => {
    link.addEventListener("click", closeNavbar);
  });

  $$(".secret_forms").forEach((item) => {
    item.addEventListener("click", closeNavbar);
  });
});
