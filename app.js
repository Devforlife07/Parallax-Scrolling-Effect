const parallax = document.querySelector("#parallax");
window.addEventListener("scroll", function() {
  let offsetY = window.pageYOffset;
  let delayed = offsetY * 0.8;
  parallax.style.backgroundPositionY = delayed + "px";
});
