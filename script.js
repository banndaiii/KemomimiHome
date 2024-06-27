// script.js
// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll behavior
  });
});

// Show the button when the user scrolls down 20px from the top of the document
window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});