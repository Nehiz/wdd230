// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Ensure the input field is not empty
    if (input.value.trim() !== '') {
        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = input.value; // Set the text of the list item to the input value

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Set the button text to a cross symbol
        deleteButton.classList.add('delete'); // Add a class for styling

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the list
        list.appendChild(li);

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Remove the list item from the list
        });

        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();
    } else {
        // Show an alert if the input is empty
        alert('Please enter a book and chapter.');
        input.focus();
    }
});
