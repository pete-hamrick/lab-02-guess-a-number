// import functions and grab DOM elements
import { compareNumbers, genRandNum } from './utils.js';
const guessBtn = document.getElementById('guess-btn');
const resetBtn = document.getElementById('reset');
const userGuess = document.getElementById('user-guess');
const feedback = document.getElementById('feedback');

let guessesRemaining = 4;
let computerNum = genRandNum();

//button clicks here
guessBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

//start game function
function startGame(){
    //converting user string input to a number
    const userGuessNum = Number(userGuess.value);
    if (userGuessNum > 20 || userGuessNum < 1){
        feedback.innerText = ' You entered an invalid number';
    }
    else {
        guessesRemaining--;
        const result = compareNumbers(computerNum, userGuessNum);
        if (guessesRemaining === 0 && userGuessNum !== computerNum){
            feedback.innerText = `Guesses Left: ${guessesRemaining}, GAME OVER`;
            gameOver();
        }
        else if (result === 'too high'){
            feedback.innerText = `You guessed too high, you have ${guessesRemaining} guesses left.`;
        }
        else if (result === 'too low'){
            feedback.innerText = `You guessed too low, you have ${guessesRemaining} guesses left.`;
        }
        else {
            feedback.innerText = `You Won, you had ${guessesRemaining} guesses left.`;
            gameOver();
        }
    }
}

function gameOver(){
    guessBtn.disabled = true;
    resetBtn.style.visibility = 'visible';
}

function resetGame(){
    guessBtn.disabled = false;
    resetBtn.style.visibility = 'hidden';
    guessesRemaining = 4;
    feedback.textContent = '';
    userGuess.value = '';
}
