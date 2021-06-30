// import functions and grab DOM elements

const guessBtn = document.getElementById('guess-btn');

// initialize state
const userGuess = document.getElementById('user-guess');
let guessesRemaining = 4;
const targetNumber = Math.floor(Math.random() * 20);

// set event listeners 
guessBtn.addEventListener('click', ()=> {
    console.log(userGuess, guessesRemaining, targetNumber);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
