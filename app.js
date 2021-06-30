// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessBtn = document.getElementById('guess-btn');

// initialize state
const userGuess = document.getElementById('user-guess');
let guessesRemaining = 4;
const targetNumber = Math.floor(Math.random() * 20);

// set event listeners 
guessBtn.addEventListener('click', ()=> {
    console.log(userGuess, guessesRemaining, targetNumber, userGuessNum, compareNumbers);
    const userGuessNum = Number(userGuess);
     
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
