// Get reference to the visit message element
const visitMessage = document.getElementById("visit-message");

// Get the current time in milliseconds
const now = Date.now();

// Check if there is a stored last visit timestamp
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  // Calculate the difference in days between visits
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  
  // Display an appropriate message based on the time difference
  if (daysDiff < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysDiff} days ago.`;
  }
} else {
  // Display a welcome message for first-time visitors
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

// Store the current visit time in localStorage
localStorage.setItem("lastVisit", now);
