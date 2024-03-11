const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	if(navigation.style.display === 'none' ) {
        navigation.style.display = 'block';
        
    } else{
        navigation.style.display = 'none';
    }
});



// thsis is the scripting for the page visits


const visitsDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem('numVisits-Is')) || 0;

if(numVisits!== 0){
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!  🥳 Welcome!` ;
}

// incrrement on the number of visits

numVisits++;

localStorage.setItem("numVisits-Is", numVisits);





// this is the scripting for the footer

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


