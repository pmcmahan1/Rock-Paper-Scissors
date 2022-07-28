
// Setting score variables
let playerScore = 0
let computerScore = 0



// This function assigns the computer's choice of rock, paper, or scissors
function getComputerChoice() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
            return 'rock';
    }
    if (number % 3 === 1) {
            return 'paper';
    }
    return 'scissors';
}

function play() {
    while (playerScore < 5 || computerScore < 5) {
    let userPrompt = prompt("Please input either rock, paper, or scissors");
    userSelection = userPrompt.toLowerCase();
    let computerSelection = getComputerChoice();
    
    if (userSelection == computerSelection) {
        console.log('Tie!');
    }
    else if (userSelection == 'rock' && computerSelection == 'scissors' ||
        userSelection == 'scissors' && computerSelection == 'paper' ||
        userSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        console.log('You won this round! ' + userSelection + ' beats ' + computerSelection)

        if (playerScore == 5) {
            console.log('You win!')
            return
        }
    }

    else {
        computerScore += 1;
        console.log('You lost this round! ' + computerSelection + ' beats ' + userSelection)

        if (computerScore == 5) {
            console.log('You lose!')
            return
        }
    }
}
}

play();
console.log('Your score: ' + playerScore)
console.log('Computers score: ' + computerScore)
