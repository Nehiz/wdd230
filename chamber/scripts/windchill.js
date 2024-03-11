const currentTemperature = 50.0;
const currentWindSpeed = 5.0;

function calculateWindChill(temperature, windSpeed) {
   const temperatureLimit = 50;
   const windSpeedLimit = 3.0;
   if(temperature <= temperatureLimit && windSpeed > windSpeedLimit){
    const windChillCal = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

    let windChill = document.querySelector("#windChill");
    windChill.innerHTML =`Wind Chill: ${windChillCal.toFixed(2)}°F`;

    console.log("correct")
      
   }
   else{
      windChill.innerHTML = "Wind Chill:" + " N/A";
   }
}

calculateWindChill(currentTemperature, currentWindSpeed);














// windchill.js

// Function to calculate wind chill
// function calculateWindChill(temperature, windSpeed) {
    // // Specification limits
    // const tempLimit = 50; // Fahrenheit
    // const windSpeedLimit = 3.0; // mph

    // Check if input values meet the requirements
    // if (temperature <= tempLimit && windSpeed > windSpeedLimit) {
        // Formula to calculate wind chill
        // const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        // Display the wind chill value
    //     console.log(`Wind Chill: ${windChill.toFixed(2)}°F`);
    // } else {
        // Display "N/A" if input values don't meet the requirements
//         console.log("Wind Chill: N/A");
//     }
// }

// Get temperature and wind speed from the page (you might use actual HTML elements with ids)
// // const currentTemperature = 45; // replace with your actual code to extract temperature
// const currentWindSpeed = 5; // replace with your actual code to extract wind speed

// Call the function with extracted values
// calculateWindChill(currentTemperature, currentWindSpeed);
