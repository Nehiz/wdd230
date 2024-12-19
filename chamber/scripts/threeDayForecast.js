// OpenWeatherMap API Variables
const apiKey = "52126f389b3a832283c05b7a3eb7cbc4";
const city = "Benin City";
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=24&appid=${apiKey}`;

// Cache Keys and Expiration Time
const cacheKey = 'forecastData';
const cacheTimestampKey = 'forecastTimestamp';
const cacheExpiration = 60 * 60 * 1000; // 1 hour

// Function to Capitalize Text
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Function to Show a Loading Spinner
function showLoading() {
  document.getElementById('forecast').innerHTML = '<p>Loading forecast...</p>';
}

// Function to Fetch and Display Weather Forecast
async function getForecast() {
  showLoading(); // Show loading spinner
  const now = Date.now();
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

  // Check Cache Validity
  if (cachedData && cachedTimestamp && now - cachedTimestamp < cacheExpiration) {
    const data = JSON.parse(cachedData);
    displayForecast(data);
    return;
  }

  // Fetch Data from API
  try {
    const response = await fetch(forecastURL);
    const data = await response.json();

    // Cache Data
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(cacheTimestampKey, now);

    // Display Forecast
    displayForecast(data);
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    document.getElementById('forecast').innerHTML = '<p>Error loading forecast data. Please try again later.</p>';
  }
}

// Function to Display Weather Forecast
function displayForecast(data) {
  const forecastContainer = document.getElementById('forecast');
  let forecastHTML = '';

  // Filter and Format Data for 3 Days
  const filteredData = data.list.filter((_, index) => index % 8 === 0).slice(0, 3);
  filteredData.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    const icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
    const condition = capitalize(item.weather[0].description);
    const temp = Math.round(item.main.temp);

    forecastHTML += `
      <li style="list-style-type: none; margin-bottom: 1em; display: flex; align-items: center;">
        <strong style="flex: 1;">${date}</strong>
        <img src="${icon}" alt="${condition}" style="width: 50px; height: 50px; margin-right: 1em;">
        <span style="flex: 2;">${condition}</span>
        <strong style="margin-left: auto;">${temp}°C</strong>
      </li>
    `;
  });

  forecastContainer.innerHTML = `<ul style="padding: 0;">${forecastHTML}</ul>`;
}

// Initialize Forecast Fetching
getForecast();
