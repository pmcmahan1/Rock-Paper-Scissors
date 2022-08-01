let computerChoice;
let playerChoice;
let result;
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");
const gameOverText = document.querySelector("#gameOver");
const buttonChoice = document.querySelectorAll(".button");
const resetButton = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;

let buttons = document.getElementsByClassName("button");


resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameOverText.textContent= ``;
    playerText.textContent = `Player : `;
    computerText.textContent = `Computer : `;
    resultText.textContent = `Result : `;
    playerScoreText.textContent= `Player Score : ${playerScore}`;
    computerScoreText.textContent= `Computer Score : ${computerScore}`;
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
})

function gameOverCheck(){
    if (playerScore == 5) {
        gameOverText.textContent= `GAME OVER, PLAYER WINS`;
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

    }
    else if (computerScore == 5) {
        gameOverText.textContent= `GAME OVER, COMPUTER WINS`;
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

    }
    else {
        return;
    }
}


buttonChoice.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${playerChoice}`;
    computerText.textContent = `Computer : ${computerChoice}`;
    playerScoreText.textContent= `Player Score : ${playerScore}`;
    computerScoreText.textContent= `Computer Score : ${computerScore}`;
    playRound();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
}

function playRound() {
    if (playerChoice == computerChoice) {
        resultText.textContent = `Result : Tie!`;
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        resultText.textContent = `Result : Win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
        playerScoreText.textContent= `Player Score : ${playerScore}`;
        gameOverCheck()

    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        resultText.textContent = `Result : Win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
        playerScoreText.textContent= `Player Score : ${playerScore}`;
        gameOverCheck()

    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        resultText.textContent = `Result : Win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
        playerScoreText.textContent= `Player Score : ${playerScore}`;
        gameOverCheck()
    }
    else {
        resultText.textContent = `Result : Lose! ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
        computerScoreText.textContent= `Computer Score : ${computerScore}`;
        gameOverCheck()
    }
}