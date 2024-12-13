// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Declare the chaptersArray and initialize with the data from localStorage, if available
let chaptersArray = getChapterList() || []; // If no chapters, initialize as empty array

// Populate the displayed list with chapters on page load
chaptersArray.forEach((chapter) => displayList(chapter));

// Button click event listener to handle adding new chapters
button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // Check if input is not empty
        const chapter = input.value.trim(); // Get the input value
        displayList(chapter); // Call displayList to show the chapter
        chaptersArray.push(chapter); // Add the chapter to the array
        setChapterList(); // Update localStorage with the new array
        input.value = ''; // Clear the input field
        input.focus(); // Set the focus back to the input field
    } else {
        alert('Please enter a book and chapter.'); // Notify user if input is empty
        input.focus();
    }
});

// Function to display each chapter in the list
function displayList(item) {
    let li = document.createElement('li'); // Create a new list item
    let deleteButton = document.createElement('button'); // Create a delete button
    li.textContent = item; // Set the text of the list item to the chapter name
    deleteButton.textContent = '❌'; // Set the delete button's text
    deleteButton.classList.add('delete'); // Add CSS class for styling the delete button
    li.append(deleteButton); // Append the delete button to the list item
    list.append(li); // Append the list item to the list

    // Event listener for the delete button to remove a chapter from the list
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Remove the list item from the DOM
        deleteChapter(li.textContent); // Remove the chapter from the array and localStorage
        input.focus(); // Set the focus back to the input field
    });
}

// Function to update localStorage with the latest chaptersArray
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); // Store the array as a string in localStorage
}

// Function to retrieve the chapter list from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')); // Parse the stored JSON string and return the array
}

// Function to delete a chapter from the chaptersArray and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the '❌' character from the chapter name
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // Filter out the deleted chapter from the array
    setChapterList(); // Update localStorage with the modified array
}