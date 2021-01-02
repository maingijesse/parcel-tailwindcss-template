const bars = document.getElementById("bars");
const menu = document.querySelector(".mob-nav");

bars.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
