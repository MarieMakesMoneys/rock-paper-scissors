let options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

const playerSelection = "Rock".toLowerCase()
const computerSelection = getComputerChoice()

