document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    // Toggle the nav-list visibility when hamburger button is clicked
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    // Ensure nav-list is always visible in larger viewports
    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            navList.classList.add("active"); // Always show menu on larger screens
        } else {
            navList.classList.remove("active"); // Hide menu for mobile screens
        }
    });
});
