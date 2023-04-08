// ------------------------------------ //
// >> VARIABLES <<
const button = document.querySelector("#down-icon-box");
const toggler = document.querySelector(".toggle-box");
const togglerIcon = document.querySelector(".toggler-icon");
const hero = document.querySelector(".hero");

// ------------------------------------ //
// >> MAIN <<
button.addEventListener("click", smoothScroll);

// ------------------------------------ //
// >> FUNCTIONS <<
toggler.addEventListener("click", () => {
  if (toggler.dataset.mode === "light") {
    nightMode();
    toggler.dataset.mode = "night";
  } else {
    lightMode();
    toggler.dataset.mode = "light";
  }
  feather.replace();
});
function nightMode() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "var(--black-blue)";
  toggler.style.borderColor = "white";
  toggler.style.color = "white";
  toggler.style.backgroundColor = "black";
  togglerIcon.classList.remove("yellow-icon");
  togglerIcon.classList.add("white-icon");
  togglerIcon.removeAttribute("data-feather");
  feather.replace();
}
function lightMode() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#fdfcdc";
  toggler.style.borderColor = "black";
  toggler.style.backgroundColor = "white";
  togglerIcon.classList.remove("yellow-icon");
  togglerIcon.classList.add("white-icon");
  togglerIcon.removeAttribute("data-feather");
  feather.replace();
}
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.dataset.target;
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 650;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressPercentage = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * progressPercentage);
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}
