// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessBtn = document.getElementById('guess-btn');
const reset = document.getElementById('reset');
const frog = document.getElementById('frog');
const userGuess = document.getElementById('user-guess');
const feedback = document.getElementById('feedback');



























































// initialize state
/*let targetNumber = Math.floor(Math.random() * 20) + 1;
const userGuess = document.getElementById('user-guess');
const feedback = document.getElementById('feedback');
let guessesRemaining = 4;

// set event listeners 
guessBtn.addEventListener('click', ()=> {
    const userGuessNum = Number(userGuess.value);
    guessesRemaining--;
    compareNumbers(reset, guessBtn, feedback, userGuessNum, targetNumber);
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
*/