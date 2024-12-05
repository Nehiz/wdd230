const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

// Toggle navigation menu and active class on hamburger
hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded for accessibility
    hamburger.setAttribute("aria-expanded", !isExpanded);

    // Toggle the active class for the hamburger and nav list
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});
