'use strict'

const list = document.querySelector('.activites-list');


const addActivite = () => {
    const activite = document.createElement('div');
    const userInput = document.querySelector('.user-input');
    const activiteName = document.createElement('p');
    const activiteChecked = document.createElement('input');
    const dateContainer = document.createElement('div');
    const date = new Date();

    if(userInput.value.length > 22){
        userInput.value = userInput.value.slice(0,22);
    } 
    // if (userInput.value.length === 0){
    //     userInput = 'break time';
    // }
    dateContainer.textContent = date.toUTCString();
    activiteChecked.type = 'checkbox';
    activite.classList.add('activite');
    dateContainer.classList.add('date');
    activiteName.textContent = userInput.value;
    list.appendChild(activite);
    activite.appendChild(activiteName);
    activite.appendChild(activiteChecked);
    activite.appendChild(dateContainer);
}



document.querySelector('.btn-add').addEventListener('click',addActivite);
document.querySelector('.btn-done').addEventListener('click',()=>{
    let activites = document.querySelectorAll('.activite');
    for (let i=0 ; i < activites.length ; i++ ){
        if (activites[i].querySelector('input').checked){
            console.log('cheched');
            activites[i].querySelector('p').style.textDecoration = 'line-through';
        }else {
            activites[i].querySelector('p').style.textDecoration = 'none';
        }
    }
});



