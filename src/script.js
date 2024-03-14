document.addEventListener("DOMContentLoaded", function () {
    // Select the scroll button and the product area
    const scrollButton = document.querySelector("#next-btn");
    const productsArea = document.querySelector(".products-area");

    // if the scroll button and the product area exist
    if (scrollButton && productsArea) {
        // scroll button click event added
        scrollButton.addEventListener("click", scrollProducts);
        // mouse click event added to the product area
        productsArea.addEventListener("mousedown", startScrolling);
        // Add drag event in product area with mouse
        productsArea.addEventListener("mousemove", scrollOnMouseMove);
        // Add mouse up event in product area
        productsArea.addEventListener("mouseup", stopScrolling);
        // Add touch event to product area with touchscreen
        productsArea.addEventListener("touchstart", startScrolling);
        // Add drag event in product area with touchscreen
        productsArea.addEventListener("touchmove", scrollOnTouchMove);
        // Add touch end event in product area
        productsArea.addEventListener("touchend", stopScrolling);
    }
});

// Scroll the product area to the right
function scrollProducts() {
    const productsArea = document.querySelector(".products-area");
    if (productsArea) {
        productsArea.scrollLeft += 260;
    }
}

// Scroll the product area to the left
let isScrolling = false;
let startX;
let scrollLeft;

function startScrolling(event) {
    // set variables 
    isScrolling = true;
    startX = event.pageX || event.touches[0].pageX;
    const productsArea = document.querySelector(".products-area");
    if (productsArea) {
        scrollLeft = productsArea.scrollLeft;
    }
}

// mouse drag event in product area
function scrollOnMouseMove(event) {
    if (!isScrolling) return;
    event.preventDefault();
    const x = event.pageX;
    const walk = (x - startX) * 2;
    const productsArea = document.querySelector(".products-area");
    if (productsArea) {
        productsArea.scrollLeft = scrollLeft - walk;
    }
}

// touch drag event in product area
function scrollOnTouchMove(event) {
    if (!isScrolling) return;
    event.preventDefault();
    const x = event.touches[0].pageX;
    const walk = (x - startX) * 2;
    const productsArea = document.querySelector(".products-area");
    if (productsArea) {
        productsArea.scrollLeft = scrollLeft - walk;
    }
}

// stop scrolling
function stopScrolling() {
    isScrolling = false;
}
