// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessBtn = document.getElementById('guess-btn');
const reset = document.getElementById('reset');
const frog = document.getElementById('frog');
// initialize state
let targetNumber = Math.floor(Math.random() * 20) + 1;
const userGuess = document.getElementById('user-guess');
const feedback = document.getElementById('feedback');
let guessesRemaining = 4;

console.log(targetNumber);
// set event listeners 
guessBtn.addEventListener('click', ()=> {
    console.log(targetNumber);
    const userGuessNum = Number(userGuess.value);
    guessesRemaining--;
    compareNumbers(guessBtn, feedback, userGuessNum, targetNumber);
    if (guessesRemaining === 0 && userGuessNum !== targetNumber) {
        feedback.textContent = 'You are out of guesses! Game over.';
        guessBtn.disabled = true;
        reset.style.visibility = 'visible'; 
    }
    frog.textContent = `You have ${guessesRemaining} guesses left`;
  });
  
  reset.addEventListener('click', ()=> {
    guessBtn.disabled = false;
    reset.style.visibility = 'hidden';
    guessesRemaining = 4;
    targetNumber = Math.floor(Math.random() * 20) + 1;
    feedback.textContent = '';
    userGuess.value = '';
    frog.textContent = `You have ${guessesRemaining} guesses left`;

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
