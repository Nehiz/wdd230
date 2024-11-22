 const date = document.querySelector("#date");
 const year = document.querySelector("#year");
 year.innerHTML = " &copy" + new Date().getFullYear();
 date.innerHTML = document.lastModified;


