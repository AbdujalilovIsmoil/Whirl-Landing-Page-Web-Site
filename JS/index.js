// WINDOW HEADER SCROLL ANIMATION EFFECT 

window.addEventListener("load",()=>{
  window.addEventListener("scroll",()=>{
    let header = document.querySelector(".header");
    header.classList.toggle("active",window.scrollY > 0);
  });
  let accordionIcons = document.querySelectorAll(".section__accordion_small_box_content_strelka");
  let accordionParagraph = document.querySelectorAll(".section__accordion_small_box_paragraph");
  for(let i = 0; i < accordionIcons.length; i++){
    accordionIcons[i].addEventListener("click",()=>{
    accordionParagraph[i].classList.toggle("active");
    });
  }
});