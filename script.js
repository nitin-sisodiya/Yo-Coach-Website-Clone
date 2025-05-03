const threeDotIcon = document.querySelector("#aman");
const closeBtn = document.querySelector('.close-btn');


threeDotIcon.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

closeBtn.addEventListener("click", () => threeDotIcon.click
());

