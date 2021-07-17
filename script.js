'use strict'



// define container of list
const list = document.querySelector('.activites-list');

// user input length
const userInputLength = document.querySelector('.user-input-value');

// function to add activite to container list
const addActivite = () => {

    // create activite container 
    const activite = document.createElement('div');
    activite.classList.add('activite');

    // create date object
    const date = new Date();
    
    // select user input text
    const userInput = document.querySelector('.user-input');


    // check if user_input is true before add features 
    if (userInput.value){
        // slice text of activite before added if bigger than 22 characters
        if(userInput.value.length > 22){
            activiteName.textContent = userInput.value.slice(0,22);
        } 
    // activite container
    const html = `
            <p>${userInput.value}</p>
            <input type="checkbox" onClick="changeText()">
            <div class="date">${date.toUTCString().replace('GMT' , '')}</div>
    `;

   

    // add activite to container list and add user_input , checkbox and date to activite container
    list.prepend(activite);
    activite.innerHTML = html;
    userInput.value = '';
    userInputLength.textContent = '00 / 22';   
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
             
             activites[i].querySelector('p').style.textDecoration = 'line-through';
             addToHistory( activites[i].querySelector('p').textContent , activites[i].querySelector('.date').textContent , true )
             setTimeout(()=>{
                activites[i].remove();
             },500);
         }
     }
};

const addToHistory = (value , time , done ) => {
    const text = `
        <p>activite: <span>${value}</span></p>
        <p>date: <span>${time}</span></p>
        <p>Done: <span>${(done) ? 'Yes' : 'No'}</span></p>
    `;
    const item = document.createElement('div');
    const container = document.querySelector('.container-history');
    item.innerHTML = text;
    container.prepend(item);
   
};



