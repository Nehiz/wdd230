document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    hamburger.addEventListener("click", () => {
        // Toggle 'show' class on the nav list
        navList.classList.toggle("show");

        // Update hamburger icon content
        if (navList.classList.contains("show")) {
            hamburger.innerHTML = "&#x2715;"; // "X" icon
            hamburger.setAttribute("aria-expanded", "true");
        } else {
            hamburger.innerHTML = "&#x2630;"; // Hamburger icon
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
});
