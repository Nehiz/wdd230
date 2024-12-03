const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list');

// Toggle menu and update icon
hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded); // Update aria-expanded
    navList.classList.toggle('active'); // Show/hide the menu

    // Toggle between hamburger icon (☰) and close icon (✖)
    if (isExpanded) {
        hamburger.textContent = '☰'; // Hamburger icon
    } else {
        hamburger.textContent = '✖'; // Close icon
    }
});
