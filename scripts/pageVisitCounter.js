// Page visit counter using localStorage
if (localStorage.getItem('pageVisitCount')) {
    let visitCount = parseInt(localStorage.getItem('pageVisitCount')) + 1;
    localStorage.setItem('pageVisitCount', visitCount);
} else {
    localStorage.setItem('pageVisitCount', 1);
}

document.getElementById('visit-counter').textContent = localStorage.getItem('pageVisitCount');