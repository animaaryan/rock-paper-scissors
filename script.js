// Creating empty strings to store the choices
let compChoice = " ";

// Set the scores for the players
let playerScore = 0;
let computerScore = 0;

// Create an array for the scores
let humanSelection = [];
let computerSelection = [];

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
    let userInput = prompt("Enter your choice between rock, paper and scissors: ");
    let userChoice = userInput.toLowerCase();

    // Return one of the valid choices for the player
    if (userChoice === "rock") {
        userChoice = "Rock";
    }
    else if (userChoice === "paper") {
        userChoice = "Paper";
    }
    else if (userChoice === "scissors") {
        userChoice = "Scissors";
    }
    else {
        alert("Incorrect choice!")
        getHumanChoice();
    }
    // Return the user choice 
    return userChoice;
}

// Writing a logic to play the round of the game
function playRound(humanSelection, computerSelection) {

    // Set a variable to store the result/message
    let result = "";

    // Run a if statement to check the choices
    if (humanSelection === computerSelection) {
        result += "It's a tie!";
    }
    else if ((humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")) {
        result += ("You win! " + humanSelection + " beats " + computerSelection);
    }
    else if ((humanSelection === "Rock" && computerSelection === "Paper") ||
        (humanSelection === "Paper" && computerSelection === "Scissors") ||
        (humanSelection === "Scissors" && computerSelection === "Rock")) {
        result += ("You lose :( " + humanSelection + " beats " + computerSelection);
    }

    // Return the choice and winner
    return result;
}

// Play the round 5 times atleast
function playGame() {

    // Run a for loop that plays the game 5 times before declaring the winner
    for (let i = 0; i < 5; i++) {
        // Create variable to access the data from playRound function
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        var results = playRound(humanChoice, computerChoice);

        if (results === "You win! " + humanChoice + " beats " + computerChoice) {
            playerScore++;
            console.log("Player Score: " + playerScore)
        }
        else if (results === "You lose :( " + humanChoice + " beats " + computerChoice) {
            computerScore++;
            console.log("Computer Score: " + computerScore)
        }

        // Allows to push the values directly back into the array to fill it up
        humanSelection.push(humanChoice);
        computerSelection.push(computerChoice);
    }

    // Check who has scored more and declare the winner
    if (playerScore > computerScore) {
        alert("You win! Computers won't be taking over soon");
    }
    else if (computerScore > playerScore) {
        alert("You lose :( You're now part of the computers");
    }
    else if (computerScore === playerScore)
    {
        alert("Draw! BUT HOW, you both are smart?");
        }
    else{
        alert("Game over! No idea why, but yeah, it's over");
    }
}

// Play the game
playGame();