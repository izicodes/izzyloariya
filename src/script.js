document.addEventListener("DOMContentLoaded", () => {
  // BULMA JS CODE!!

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });

  // ----------------------------------------- //

  // This is for the scrolling from hero page to the first heading!

  const button = document.querySelector(".fa-angles-down");

  //   button.addEventListener("click", () => {
  //     const target = button.dataset.target;
  //     const element = document.querySelector(target);
  //     const offset = element.getBoundingClientRect().top + window.pageYOffset;

  //     button.classList.add("active");
  //     window.scrollTo({
  //       top: offset,
  //       behavior: "smooth",
  //     });

  //     setTimeout(() => {
  //       button.classList.remove("active");
  //     }, 2000);
  //   });

  // ----------------------------------------- //

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.dataset.target;
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 700;
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

  button.addEventListener("click", smoothScroll);
});
