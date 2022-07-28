// WINDOW HEADER SCROLL ANIMATION EFFECT 

window.addEventListener("load",()=>{
  window.addEventListener("scroll",()=>{
    let header = document.querySelector(".header");
    header.classList.toggle("active",window.scrollY > 0);
  });
});