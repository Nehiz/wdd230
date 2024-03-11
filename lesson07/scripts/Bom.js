const input = document.querySelector('#favchap');
const Button = document.querySelector('button');
const list = document.querySelector('#list');
const ErrorMsg = document.querySelector('#errorMsg');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter =>{
    displayList(chapter)
 });

Button.addEventListener('click' , () =>{
    if(input.value != ''){  // make sure the input is not empty
        ErrorMsg.style.display = ' none'; // This won't display the error message
        displayList(input.value);  // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList();  // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input

    }else{
        ErrorMsg.style.display = 'block';
    }

});


function displayList(item){
    const Li = document.createElement('li');
    const deleteButton = document.createElement('button');
    Li.textContent = item;
    deleteButton.textContent ='❌';
    deleteButton.classList.add('delete');
    Li.append(deleteButton);
    list.append(Li);
    deleteButton.addEventListener('click' , () =>{
        list.removeChild(Li);
        deleteChapter(Li.textContent);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem('myFavBOMList' , JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'))
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

