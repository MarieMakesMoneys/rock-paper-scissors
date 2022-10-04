let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

const playerSelection = "paPEr".toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
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
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
}