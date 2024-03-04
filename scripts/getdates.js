const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	if(navigation.style.display === 'none' ) {
        navigation.style.display = 'block';
        
    } else{
        navigation.style.display = 'none';
    }
});


const modeButton = document.querySelector("#mode");
const Body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		Body.style.background = "#000";
		Body.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		Body.style.background = "#fff";
		Body.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});



const options = {year: 'numeric'}

document.querySelector('#year').textContent = new Date().toLocaleDateString('pt-BR', options);

 

const oLastModif = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = oLastModif;

 

const currentPageURL = window.location.href;

 

const navLinks = document.querySelectorAll('nav a');

 

for(var i=0; i< navLinks.length; i++) 

{

    if(navLinks[i].href === currentPageURL)

    {

        navLinks[i].classList.add('active');

    }

}


