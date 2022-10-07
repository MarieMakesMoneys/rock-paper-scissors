let playerScore = 0;
let computerScore = 0;

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
        const p = document.createElement('p');
        p.textContent = `It's a tie! You both picked ${playerSelection}! The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = `Computer wins! Paper beats Rock!  The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `You win! Rock beats Scissors! The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = `Computer wins! Scissors beat Paper! The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `You win! Paper beats Rock! The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        const p = document.createElement('p');
        p.textContent = `Computer wins! Rock beats Scissors! The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `You win! Scissors beat Paper! The score is ${playerScore} for you and ${computerScore} for the computer.`;
        outcome.appendChild(p);
    }
};
function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.textContent = "You've won the game, congrats !!!";
        outcome.appendChild(h2);
    }
    
    if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.textContent = "Uh oh, the machine has won...";
        outcome.appendChild(h2);
    }
}




function game(roundNum) {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < roundNum; i++) {
        let playerSelection = buttonClicked()
        let computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));
        
        if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" ) {
            playerWin = playerWin + 1
        } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
            computerWin = computerWin + 1
        }
    }
    
    if (playerWin > computerWin) {
        console.log("You won! What a game!")
    } else if (playerWin < computerWin) {
        console.log("The machine has won, we are doomed.")
    } else {
        console.log("It's a full tie, play another game ?")
    }
};