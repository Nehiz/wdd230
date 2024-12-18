
// OpenWeatherMap API Variables
const apiKey = "52126f389b3a832283c05b7a3eb7cbc4"; // Replace with your API key
const city = "Benin City"; // Replace with your city
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`; // Fetch in Celsius
// Function to Capitalize Condition
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Function to Fetch and Display Weather
async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    // Update Temperature and Condition with Icon
    document.getElementById("temp").textContent = Math.round(data.main.temp);
    document.getElementById("condition").textContent = capitalize(data.weather[0].description);
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").alt = data.weather[0].description;

    // Update Visit Count (Example: Increment Logic)
    let count = localStorage.getItem("visitCount") || 0;
    count++;
    localStorage.setItem("visitCount", count);
    document.getElementById("visit-count").textContent = count;

  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Call Weather Function
getWeather();
