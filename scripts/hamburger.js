const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('#nav-list');

hamburger.addEventListener('click', () => {
    // Toggle the active state for the navigation list
    navList.classList.toggle('active');

    // Toggle the "open" class to control the hamburger icon
    hamburger.classList.toggle('open');

    // Update the aria-expanded attribute for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
});
