document.addEventListener('DOMContentLoaded', () => {
    const directoryContainer = document.getElementById('directory-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch and populate data from JSON
    fetch('data/members.json')
        .then((response) => response.json())
        .then((data) => {
            renderGrid(data); // Default view
            toggleView(data);
        })
        .catch((error) => console.error('Error loading JSON:', error));

    // Render Grid View
    function renderGrid(data) {
        directoryContainer.innerHTML = data
            .map(
                (member) => `
            <div class="member-card">
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership-level ${member.membership.toLowerCase()}">${member.membership} Member</p>
            </div>
        `
            )
            .join('');
        directoryContainer.className = 'grid-view';
    }

    // Render List View
    function renderList(data) {
        directoryContainer.innerHTML = data
            .map(
                (member) => `
            <div class="member-list-item">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership-level ${member.membership.toLowerCase()}">${member.membership} Member</p>
            </div>
        `
            )
            .join('');
        directoryContainer.className = 'list-view';
    }

    // Toggle View Functionality
    function toggleView(data) {
        gridViewButton.addEventListener('click', () => {
            renderGrid(data);
            gridViewButton.classList.add('active');
            listViewButton.classList.remove('active');
        });

        listViewButton.addEventListener('click', () => {
            renderList(data);
            listViewButton.classList.add('active');
            gridViewButton.classList.remove('active');
        });
    }
});
