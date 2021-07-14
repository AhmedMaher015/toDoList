'use strict'
// define container of list
const list = document.querySelector('.activites-list');

// function to add activite to container list
const addActivite = () => {
    
    // create activite container 
    const activite = document.createElement('div');
    activite.classList.add('activite');

    // create date container 
    const dateContainer = document.createElement('div');
    const date = new Date(); 
    dateContainer.textContent = date.toUTCString().replace('GMT' , '');
    dateContainer.classList.add('date');

    // create checkbox on activite container
    const activiteChecked = document.createElement('input');
    activiteChecked.type = 'checkbox';
    activiteChecked.setAttribute('onClick' , 'changeText()');

    
    // create user input 
    const activiteName = document.createElement('p');
    const userInput = document.querySelector('.user-input');
    activiteName.textContent = userInput.value;

    // check if user_input is true before add features 
    if (userInput.value){
        // slice text of activite before added if bigger than 22 characters
        if(userInput.value.length > 22){
            activiteName.textContent = userInput.value.slice(0,22);
        } 

        // add activite to container list and add user_input , checkbox and date to activite container
        console.log(userInput.value);
        list.prepend(activite);
        activite.appendChild(activiteName);
        activite.appendChild(activiteChecked);
        activite.appendChild(dateContainer);
    }
 
}

// add enter key to user input 
document.querySelector('.user-input').addEventListener('keyup',(event)=> {
    if(event.key === 'Enter'){
        addActivite();
    }
});

// show user input length 
const userInputSize = () => {
    const val = document.querySelector('.user-input');
    document.querySelector('.user-input-value').textContent = val.value.length + ' / 22'; 
};
// action of add button
document.querySelector('.btn-add').addEventListener('click',addActivite);

// function checkbox action to change text to deleted after checked
const changeText = () => {
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
             console.log('unchecked');
         }
     }
};




