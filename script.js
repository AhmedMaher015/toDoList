'use strict'
// define container of list
const list = document.querySelector('.activites-list');

// function to add activite to container list
const addActivite = () => {
    
    const activiteName = document.createElement('p');


    // create activite container 
    const activite = document.createElement('div');
    activite.classList.add('activite');

    // create date container 
    const dateContainer = document.createElement('div');
    const date = new Date(); 
    dateContainer.textContent = date.toUTCString();
    dateContainer.classList.add('date');

    // create checkbox on activite container
    const activiteChecked = document.createElement('input');
    activiteChecked.type = 'checkbox';

    
    // create user input 
    const userInput = document.querySelector('.user-input');
    activiteName.textContent = userInput.value;
       
    // slice text of activite before added if bigger than 22 characters
    if(userInput.value.length > 22){
        userInput.value = userInput.value.slice(0,22);
    } 


    // add activite to container list and add user_input , checkbox and date to activite container
    list.appendChild(activite);
    activite.appendChild(activiteName);
    activite.appendChild(activiteChecked);
    activite.appendChild(dateContainer);
}

// add enter key to user input 
document.querySelector('.user-input').addEventListener('keyup',(event)=> {
    if(event.key === 'Enter'){
        addActivite();
    }
    console.log( event.key );
});


// action of add button
document.querySelector('.btn-add').addEventListener('click',addActivite);

// action of done button
document.querySelector('.btn-done').addEventListener('click',()=>{
    // define array of activites 
    let activites = document.querySelectorAll('.activite');
    // loop for activites array 
    for (let i=0 ; i < activites.length ; i++ ){
        // check if checkbox is clicked then make text deleted
        if (activites[i].querySelector('input').checked){
            console.log('cheched');
            activites[i].querySelector('p').style.textDecoration = 'line-through';
        }else {
            // else make text not deleted
            activites[i].querySelector('p').style.textDecoration = 'none';
        }
    }
});



