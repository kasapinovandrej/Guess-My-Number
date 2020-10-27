'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

/*DRY funkcija -- dobra stvar!*/

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
} 


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage( `🚯 No number!`);
    } else if (guess === secretNumber) {
        displayMessage(`🌄 Correct Number!`);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        /********REFACTORING THE CODE*********/
        if (score > 1) {
            guess > secretNumber ? displayMessage(`📈 Too high!`) : displayMessage(`📉 Too low!`);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage(`💣 You lost the game!`);
            document.querySelector('.score').textContent = 0;
        }
    } 

});


/********REFACTORING THE CODE*********/

    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `📈 Too high!`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = `💣 You lost the game!`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = `📉 Too low!`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = `💣 You lost the game!`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }


