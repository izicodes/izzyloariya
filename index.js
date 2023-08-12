const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelector(".nav-links");

// Function to toggle navLinks display
function toggleNavLinks() {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}

// Event listener for navMenu click
navMenu.addEventListener("click", toggleNavLinks);

// Event listener for navLinks click
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    if (window.innerWidth <= 1023) {
      toggleNavLinks(); // Hide navLinks on small screens when a link is clicked
    }

    // Get the target section ID from the href attribute
    const targetSectionId = event.target.getAttribute("href");

    // Scroll to the target section
    document.querySelector(targetSectionId).scrollIntoView({
      behavior: "smooth",
    });

    // Prevent the default link behavior (page jump)
    event.preventDefault();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

// Initial check for larger screens
if (window.innerWidth >= 1024) {
  navLinks.style.display = "flex";
}

// TO-DO: The menu disappears when you hide it during small screen and then go back to big screen. So automatically, when the 