const rating_points = document.querySelectorAll(".rating__all span");
const rating_btn = document.querySelector(".rating__btn");
const rate_place = document.getElementById("rate");
const rating_section = document.querySelector(".rating");
const thank_section = document.querySelector(".thank");

let rate = 0;

rating_points.forEach((point) => {
  point.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) active.classList.remove("checked");

    e.target.classList.add("checked");
    rate = e.target.innerText;
  });
});

rating_btn.addEventListener("click", () => {
  if (rate) {
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
    rate_place.textContent = rate;
  }
});
