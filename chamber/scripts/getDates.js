// Function to display last modified date dynamically
function displayLastModifiedDate() {
    // Get the last modified date of the document
    const lastModified = document.lastModified;

    // Convert the lastModified date to a more readable format
    const formattedDate = new Date(lastModified).toLocaleString();

    // Update the content of the element with id "date"
    document.getElementById('date').textContent = formattedDate;
}

// Call the function when the page loads
window.onload = function() {
    displayLastModifiedDate();
};
