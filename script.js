let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

// onclick functionality
// toggle.onclick = function () {
//   menu.classList.toggle("active");
// };

// hover functionality
toggle.addEventListener("mouseover", () => {
  menu.classList.add("active");
});

toggle.addEventListener("mouseout", () => {
  menu.classList.remove("active");
});
