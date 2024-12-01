// Select the dark mode switch
const darkModeSwitch = document.getElementById('darkModeSwitch');

// Add event listener to toggle dark mode
darkModeSwitch.addEventListener('change', () => {
    if (darkModeSwitch.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
