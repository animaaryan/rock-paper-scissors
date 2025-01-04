// Creating empty strings to store the choices
let compChoice = " ";
let userChoice = " ";

// Creating empty scores to 0 which we will increment later
let playerScore = 0;
let computerScore = 0;

// Create a function called getComputerChoice() 
function getComputerChoice() {

    // Use Math.Random to generate a random number
    let choice = Math.floor(Math.random() * 3 + 1);

    // The function returns a STRING which is Rock, Paper, Scissors
    if (choice === 1) {
        compChoice = "Rock";
    }
    else if (choice === 2) {
        compChoice = "Paper";
    }
    else {
        compChoice = "Scissors";
    }
    return compChoice;
}

// Create a function to get a human choice 
function getHumanChoice() {

    // Use prompt to ask the user
    userChoice = prompt("Enter your choice between rock, paper and scissors: ");
    
    // Return the user choice 
    return userChoice.toLowerCase();
}

// Writing a logic to play the round of the game
function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice(userChoice);
    computerChoice = getComputerChoice(compChoice)

    return console.log(humanChoice + " " + computerChoice)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Log it to the console
console.log(playRound(humanSelection, computerSelection));


