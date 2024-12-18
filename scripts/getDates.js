const date = document.querySelector("#date");
const year = document.querySelector("#year");

// Add the current year
year.innerHTML = `&copy; ${new Date().getFullYear()}`;

// Add the document's last modified date
date.innerHTML = document.lastModified;
