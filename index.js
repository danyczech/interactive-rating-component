const rating_points = document.querySelectorAll(".rating__all span");
const rating_btn = document.querySelector(".rating__btn");
const rate_place = document.getElementById("rate");
const rating_section = document.querySelector(".rating");
const thank_section = document.querySelector(".thank");

// rate holds the selected rating, starts with falsy value
let rate = 0;

//puts listening to click on all rating numbers & ensures that only 1 number was chosen
rating_points.forEach((point) => {
  point.addEventListener("click", (e) => {
    //every time a point is clicked, this checks if something else was selected before and if yes, then it removes it from checked
    const active = document.querySelector(".checked");
    if (active) active.classList.remove("checked");
    //puts the checked class on the clicked number & stores the value in rate
    e.target.classList.add("checked");
    rate = e.target.textContent;
  });
});

//puts listening to click on submit button, works only when any rate is checked & hides and shows the right cards
rating_btn.addEventListener("click", () => {
  if (rate) {
    rating_section.classList.add("hidden");
    thank_section.classList.remove("hidden");
    rate_place.textContent = rate;
  }
});
