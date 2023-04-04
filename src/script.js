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
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".scroll-container"),
    smooth: true,
  });

  const scrollIcon = document.querySelector(".fa-solid.fa-angles-down");
  const targetSection = document.querySelector("#new-section");

  scrollIcon.addEventListener("click", () => {
    scroll.scrollTo(targetSection);
  });
});
