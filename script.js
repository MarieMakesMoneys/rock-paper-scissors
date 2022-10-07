let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
};

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Rock versus Rock... It's a tie!";
                    break;
                case "paper":
                    return "You lose! Paper beats Rock!";
                    break;
                case "scissors":
                    return "You win! Rock beats Scissors!";
                    break;   
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You win! Paper beats Rock!";
                    break;
                case "paper":
                    return "Paper versus Paper... It's a tie!";
                    break;
                case "scissors":
                    return "You lose! Scissors beat Paper!";
                    break;   
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lose! Rock beats Scissors!";
                    break;
                case "paper":
                    return "You win! Scissors beat Paper!";
                    break;
                case "scissors":
                    return "Scissors versus Scissors... It's a tie!";
                    break;   
            }
            break;
        default:
            return "There seems to be a problem. Please try again."
    }
};

let roundNum = Number(prompt("How many rounds do you want to play?", ""));

function game(roundNum) {
    let playerWin = 0;
    let computerWin = 0;

    for (let i = 0; i < roundNum; i++) {
        let playerSelection = prompt("Your move : rock, paper, or scissors ?", "");
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

const buttons = document.querySelectorAll('button');

const buttonRock = document.querySelector('button.R');
const buttonPaper = document.querySelector('button.P');
const buttonScissors = document.querySelector('button.S');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

