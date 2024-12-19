// JSON Data Source for Members
const members = [
    {
      name: "GreenTech Solutions",
      address: "123 Main Street, Benin City, Nigeria",
      phone: "+234 812 345 6789",
      website: "https://www.greentechsolutions.com",
      image: "images/green6.webp",
      membership: "Gold",
      description: "Eco-Friendly Innovations for a sustainable future."
    },
    {
      name: "Prime Fitness Hub",
      address: "456 Industrial Avenue, Sapele Road, Benin City, Nigeria",
      phone: "+234 803 123 4567",
      website: "https://www.primefitnesshub.com",
      image: "images/fitness.webp",
      membership: "Silver",
      description: "Transforming Health, One Workout at a Time."
    },
    {
      name: "Local Arts and Crafts",
      address: "789 Innovation Road, Benin City, Nigeria",
      phone: "+234 705 678 1234",
      website: "https://www.localartsandcrafts.com",
      image: "images/art.webp",
      membership: "Bronze",
      description: "Handmade Creations that Tells a Story."
    },
    {
      name: "Digital Edge Technologies",
      address: "33 Silicon Valley Road, Ikeja, Lagos, Nigeria",
      phone: "+234 909 654 3210",
      website: "https://www.digitaledgetech.com",
      image: "images/digital-edge.webp",
      membership: "Gold",
      description: "Empowering Businesses Through Digital Transformation."
    },
    {
      name: "Fresh Harvest Foods",
      address: "12 Fresh Farm Lane, Asaba, Delta State, Nigeria",
      phone: "+234 802 567 8910",
      website: "https://www.freshharvestfoods.com",
      image: "images/fresh-harvest.webp",
      membership: "Silver",
      description: "Delivering Farm-Fresh Produce Directly to Your Doorstep."
    },
    {
      name: "Benin Heritage Tours",
      address: "8 Royal Palace Drive, Benin City, Nigeria",
      phone: "+234 814 789 6543",
      website: "https://www.beninheritagetours.com",
      image: "images/heritage-tours.webp",
      membership: "Bronze",
      description: "Connecting You to the Rich History of Benin City."
    },
    {
      name: "Edo Boy Kitchen",
      address: "8 Royal Palace Drive, Benin City, Nigeria",
      phone: "+234 814 789 6543",
      website: "https://www.edoboykitchen.com",
      image: "images/kitchen.webp",
      membership: "Bronze",
      description: "Connecting You to the Rich History of Benin City."
    },
    {
      name: "Ogba Zoo Tours",
      address: "15 , Benin City, Nigeria",
      phone: "+234 814 789 6543",
      website: "https://www.ogbatours.com",
      image: "images/ogba.webp",
      membership: "Bronze",
      description: "Connecting You to the Rich History of Benin City."
    }
  ];
  
  // Function to Randomly Select Spotlight Members
  function getSpotlightMembers(members, count) {
    // Filter only Silver and Gold members
    const qualifiedMembers = members.filter(member =>
      ["Gold", "Silver"].includes(member.membership)
    );
  
    // Shuffle and pick a specified number of members
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  // Function to Display Spotlight Advertisements
  // Function to Display Spotlight Advertisements
function displaySpotlights() {
  const spotlightContainer = document.getElementById("spotlight-container");
  const selectedMembers = getSpotlightMembers(members, 2 + Math.floor(Math.random() * 2)); // Randomly choose 2 or 3 members
  
  let spotlightHTML = '';
  selectedMembers.forEach(member => {
    spotlightHTML += `
      <div class="spotlight-item">
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </div>
    `;
  });

  spotlightContainer.innerHTML = spotlightHTML;
}

// Initialize Spotlight Display
displaySpotlights();

  
  // Initialize Spotlight Display
  displaySpotlights();
  