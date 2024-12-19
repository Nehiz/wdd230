// Function to check the current day and show the banner if it's Monday, Tuesday, or Wednesday
function checkBannerVisibility() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Get the current day (0 = Sunday, 1 = Monday, etc.)
  
    // Show the banner only on Monday (1), Tuesday (2), or Wednesday (3)
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
      document.getElementById("chamberBanner").style.display = "block";
    }
  }
  
  // Function to close the banner when the user clicks the ❌ button
  function closeBanner() {
    document.getElementById("chamberBanner").style.display = "none";
  }
  
  // Call the function to check and display the banner when the page loads
  window.onload = checkBannerVisibility;
  