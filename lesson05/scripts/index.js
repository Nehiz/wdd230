const input = document.querySelector('#favchap');
const Button = document.querySelector('button');
const list = document.querySelector('#list');
const ErrorMsg = document.querySelector('#errorMsg');



Button.addEventListener('click' , () =>{
    if(input.value != ''){
        ErrorMsg.style.display = ' none';

    }else{
        ErrorMsg.style.display = 'block';
    }
    const Li = document.createElement('li');
    const deleteButton = document.createElement('button');
    Li.textContent = input.value;
    deleteButton.textContent ='❌';
    Li.append(deleteButton);
    list.append(Li);
    deleteButton.addEventListener('click' , () =>{
        list.removeChild(Li);
        input.focus();
    });
    input.focus();
    input.value = '';


})