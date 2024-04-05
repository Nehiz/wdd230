// const currentTemperature = 50.0;
// const currentWindSpeed = 5.0;

// function calculateWindChill(temperature, windSpeed) {
//    const temperatureLimit = 50;
//    const windSpeedLimit = 3.0;
//    if(temperature <= temperatureLimit && windSpeed > windSpeedLimit){
//     const windChillCal = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

//     let windChill = document.querySelector("#windChill");
//     windChill.innerHTML =`Wind Chill: ${windChillCal.toFixed(2)}°F`;

//     console.log("correct")
      
//    }
//    else{
//       windChill.innerHTML = "Wind Chill:" + " N/A";
//    }
// }

// calculateWindChill(currentTemperature, currentWindSpeed);


// this is the scripting for the date interval

    // Get the current date
    var currentDate = new Date();
    
    // Get the last visit date from localStorage
        var lastVisitDate = localStorage.getItem("lastVisitDate");

        // Check if this is the user's first visit
        if (!lastVisitDate) {
        // Set the current date as the last visit date
        localStorage.setItem("lastVisitDate", currentDate);
        // Display welcome message
        document.querySelector(".visits").innerHTML = "Welcome! Let us know if you have any questions.";
        } else {
        // Convert last visit date string to a Date object
        lastVisitDate = new Date(lastVisitDate);

        // Calculate the time difference in milliseconds

        var timeDiff = currentDate.getTime() - lastVisitDate.getTime();

        // Calculate the number of days between visits
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Display appropriate message based on days difference
        if (daysDiff < 1) {
        // Display "Back so soon! Awesome!" message
        document.querySelector(".visits").innerHTML = "Back so soon! Awesome!";
        } else if (daysDiff == 1) {
        // Display "You last visited 1 day ago." message
        document.querySelector(".visits").innerHTML = "You last visited 1 day ago.";
        } else {
        // Display "You last visited " + daysDiff + " days ago." message
        document.querySelector(".visits").innerHTML = "You last visited " + daysDiff + " day" + (daysDiff === 1 ? "" : "s") + " ago.";
   
       
  
        }

        // Update the last visit date in localStorage
        localStorage.setItem("lastVisitDate", currentDate);
        }


     // Display "You last visited " + daysDiff + " days ago." message
       
        // var message = "You last visited " + daysDiff + " day" + (daysDiff === 1 ? "" : "s") + " ago.";
        // document.querySelector(".visits").innerHTML = message;












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
