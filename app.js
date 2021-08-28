const slider = document.querySelector(".container");
let isDown = false;
let startx;
let scrollLeft;

slider.addEventListener("mousedown", function (e) {
  isDown = true;
  slider.classList.add("active");

  startx = e.pageX;
});

slider.addEventListener("mouseup", function () {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", function () {
  isDown = false;
  slider.classList.remove("active");
});
