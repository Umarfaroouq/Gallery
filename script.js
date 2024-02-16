// Selecting the scroll container and buttons
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Adding event listener for mouse wheel scrolling
scrollContainer.addEventListener("wheel", (evt) => {
    // Preventing default scrolling behavior
    evt.preventDefault();
    // Scrolling horizontally based on mouse wheel delta
    scrollContainer.scrollLeft += evt.deltaY;
    // Disabling smooth scroll behavior temporarily
    scrollContainer.style.scrollBehavior = "auto";
});

// Adding event listener for next button click
nextBtn.addEventListener("click", () => {
    // Enabling smooth scroll behavior
    scrollContainer.style.scrollBehavior = "smooth";
    // Scrolling horizontally by a fixed amount
    scrollContainer.scrollLeft += 900;
});

// Adding event listener for back button click
backBtn.addEventListener("click", () => {
    // Enabling smooth scroll behavior
    scrollContainer.style.scrollBehavior = "smooth";
    // Scrolling horizontally by a fixed amount (opposite direction)
    scrollContainer.scrollLeft -= 900;
});
