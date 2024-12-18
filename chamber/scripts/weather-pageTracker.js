// OpenWeatherMap API Variables
const apiKey = "52126f389b3a832283c05b7a3eb7cbc4"; 
const city = "Benin City"; 
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// Function to Capitalize the Condition
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Function to Fetch and Display Weather
async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    // Update Temperature, Condition, and Weather Icon
    document.getElementById("temp").textContent = Math.round(data.main.temp);
    document.getElementById("condition").textContent = capitalize(data.weather[0].description);
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").alt = data.weather[0].description;

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Page Visit Counter Logic
function updateVisitCounter() {
  let visits = localStorage.getItem("pageVisits");
  
  if (!visits) {
    visits = 0;
  }
  visits = parseInt(visits) + 1;

  // Update the visit count on the page and in localStorage
  document.getElementById("visit-counter").textContent = visits;
  localStorage.setItem("pageVisits", visits);
}

// Initialize Functions
getWeather();
updateVisitCounter();
