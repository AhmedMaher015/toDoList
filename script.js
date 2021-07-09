'use strict'

const list = document.querySelector('.activites-list');


const addActivite = () => {
    const activite = document.createElement('div');
    const userInput = document.querySelector('.user-input');
    const activiteName = document.createElement('p');
    const activiteChecked = document.createElement('input');

    if(userInput.value.length > 22){
        userInput.value = userInput.value.slice(0,22);
    } 
    // if (userInput.value.length === 0){
    //     userInput = 'break time';
    // }
    activiteChecked.type = 'checkbox';
    activite.classList.add('activite');
    activiteName.textContent = userInput.value;
    list.appendChild(activite);
    activite.appendChild(activiteName);
    activite.appendChild(activiteChecked)
    check = document.querySelector('.activite input');
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



