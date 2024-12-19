document.addEventListener("DOMContentLoaded", () => {
    const directoryContainer = document.getElementById("directory-container");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");

    // Fetch JSON data
    fetch("data/members.json")
        .then((response) => response.json())
        .then((members) => {
            displayMembers(members, "grid");

            // Toggle between Grid and List Views
            gridViewButton.addEventListener("click", () => {
                displayMembers(members, "grid");
                toggleActiveButton(gridViewButton, listViewButton);
            });

            listViewButton.addEventListener("click", () => {
                displayMembers(members, "list");
                toggleActiveButton(listViewButton, gridViewButton);
            });
        });

    // Function to Display Members
    function displayMembers(members, view) {
        directoryContainer.innerHTML = ""; // Clear existing content
        members.forEach((member) => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member", view);

            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: <strong>${member.membership}</strong></p>
            `;
            directoryContainer.appendChild(memberElement);
        });
    }

    // Function to Toggle Active Button
    function toggleActiveButton(active, inactive) {
        active.classList.add("active");
        inactive.classList.remove("active");
    }
});
