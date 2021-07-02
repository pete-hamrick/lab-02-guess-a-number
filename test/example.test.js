// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('userGuess is too high', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'too high';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('userGuess is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'too low';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('userGuess is correct', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'correct';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});














/*
test('userGuess is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('userGuess is right on', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Act 
    const expected = 0;
    
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(0, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
*/