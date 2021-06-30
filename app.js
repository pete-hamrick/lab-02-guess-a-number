// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessBtn = document.getElementById('guess-btn');
const feedback = document.getElementById('feedback');

// initialize state
const userGuess = document.getElementById('user-guess');
let guessesRemaining = 3;
const targetNumber = Math.floor(Math.random() * 20);

// set event listeners 
guessBtn.addEventListener('click', ()=> {
  //          no tries remaining?
    if (guessesRemaining === 0) {
//                  display lose message
        feedback.textContent = 'You are out of guesses! Game over.';
//                  disable game play

    }
        //      decrement tries remaining  
    console.log(userGuess, guessesRemaining, targetNumber, userGuessNum, compareNumbers);
    const userGuessNum = Number(userGuess);
    guessesRemaining--;
     
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
