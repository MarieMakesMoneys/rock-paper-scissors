let options = ["r", "p", "s"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

const playerSelection = "R".toLowerCase()
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "r":
            switch (computerSelection) {
                case "r":
                    return "It's a tie!";
                    break;
                case "p":
                    return "You lose! Paper beats Rock!";
                    break;
                case "s":
                    return "You win! Rock beats Scissors!";
                    break;   
            }
            break;
        case "p":
            switch (computerSelection) {
                case "r":
                    return "It's a tie!";
                    break;
                case "p":
                    return "You lose! Paper beats Rock!";
                    break;
                case "s":
                    return "You win! Rock beats Scissors!";
                    break;   
            }
            break;
    }