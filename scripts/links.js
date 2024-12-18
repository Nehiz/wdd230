// Base URL for GitHub Pages
const baseURL = "https://nehiz.github.io/wdd230/";
// Path to JSON data
const linksURL = `${baseURL}data/links.json`;

// Function to Fetch JSON Data
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks); // Pass 'weeks' array to displayLinks function
}

// Function to Dynamically Generate Links
function displayLinks(weeks) {
    // Select the <ul> element where links will be displayed
    const activitiesList = document.querySelector(".card ul");
    activitiesList.innerHTML = ""; // Clear any existing content

    // Loop through each week and generate the list
    weeks.forEach(week => {
        // Create a list item for the week
        const weekItem = document.createElement("li");
        weekItem.textContent = `${week.week}: `;

        // Create links for each activity
        week.links.forEach((activity, index) => {
            const link = document.createElement("a");
            link.href = activity.url;
            link.textContent = activity.title;
            link.target = "_blank"; // Open links in a new tab

            // Append the link to the weekItem
            weekItem.appendChild(link);

            // Add a separator if there are multiple links
            if (index < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(" | "));
            }
        });

        // Append the list item to the activitiesList
        activitiesList.appendChild(weekItem);
    });
}

// Call the Function to Fetch and Display Links
getLinks();
