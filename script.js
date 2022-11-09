let playerScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.computer-score');

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome');

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

btnRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
})
btnPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
})
btnScissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome.textContent = `It's a tie! You both picked ${playerSelection}!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
        outcome.textContent = `Computer wins! Paper beats Rock!`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore.textContent = Number(computerScore.textContent) + 1;
        outcome.textContent = `You win! Rock beats Scissors!`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
        outcome.textContent = `Computer wins! Scissors beat Paper!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore.textContent = Number(computerScore.textContent) + 1;
        outcome.textContent = `You win! Paper beats Rock!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
        outcome.textContent = `Computer wins! Rock beats Scissors!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore.textContent = Number(computerScore.textContent) + 1;
        outcome.textContent = `You win! Scissors beat Paper!`;
    }
};


function checkForWinner(playerScore, computerScore) {
    if (Number(playerScore.textContent) === 5) {
        outcome.textContent = "You've won the game, congratulations !!! Click the button to play another round!";
    }

    if (Number(computerScore.textContent) === 5) {
        outcome.textContent = "The computer has won... Click the button to play another round!";
    }

    if (Number(computerScore.textContent) >= 5 || Number(playerScore.textContent >= 5)) {
        btnPaper.removeEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = 'paper';
            playRound(playerSelection, computerSelection);
            checkForWinner(playerScore, computerScore);
        })
        btnRock.removeEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = 'rock';
            playRound(playerSelection, computerSelection);
            checkForWinner(playerScore, computerScore);
        })
        btnScissors.removeEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const playerSelection = 'scissors';
            playRound(playerSelection, computerSelection);
            checkForWinner(playerScore, computerScore);
        })
    }
}

const playAgain = document.querySelector('.play-again')
playAgain.addEventListener('click', () => window.location.reload());