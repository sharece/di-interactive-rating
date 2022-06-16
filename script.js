const ratingContainer = document.querySelector(".rating-container");
const thankContainer = document.querySelector(".thank-container");
const ratingButtonContainer = document.querySelector(
  ".rating-button-container"
);
const allRatingBtns = document.querySelectorAll(".btn-rate");
const btnSubmit = document.querySelector(".btn-submit");
const ratingResponse = document.querySelector(".rating-response");
let rating;

// rating hover
ratingButtonContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-rate-active"))
    e.target.classList.remove("btn-rate-active");
  else {
    allRatingBtns.forEach((btn) => btn.classList.remove("btn-rate-active"));
    e.target.classList.add("btn-rate-active");
    rating = e.target.dataset.id;
  }
});
allRatingBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    if (!this.classList.contains("btn-rate-active"))
      this.classList.add("btn-rate-hover");
  });
});
allRatingBtns.forEach((btn) => {
  btn.addEventListener("mouseout", function () {
    this.classList.remove("btn-rate-hover");
  });
});
// submit
btnSubmit.addEventListener("click", function () {
  if (!rating) return alert("Please select a valid rating");
  ratingResponse.textContent = `You selected ${rating} out of 5`;
  ratingContainer.classList.add("hidden");
  thankContainer.classList.remove("hidden");
});
