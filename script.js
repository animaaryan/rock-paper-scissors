// Creating empty strings to store the choices
let compChoice = " ";

// Set the scores for the players
let playerScore = 0;
let computerScore = 0;

// Create an array for the scores
let humanSelection = [];
let computerSelection = [];

//_____________________________________________________________

// Select the ID of the three buttons
const ROCK = document.getElementById("ROCK");
const PAPER = document.getElementById("PAPER");
const SCISSORS = document.getElementById("SCISSORS");

// Pass to event listener
ROCK?.addEventListener('click', function () {
    playRound('Rock', computerSelection);
});

PAPER?.addEventListener('click', function () {
    playRound('Paper', computerSelection);
});

SCISSORS?.addEventListener('click', function () {
    playRound('Paper', computerSelection);
});

// Look for each clicked button and add an event listener
const BUTTONS = document.querySelectorAll('button')
BUTTONS.forEach((button) => {
    button.addEventListener('click', function (e) {
        playRound(humanSelection, computerSelection, e.target.value);
    })
})


//_____________________________________________________________

// Create a function called getComputerChoice() 
function getComputerChoice() {

    // Create an array of choices
    const OPTIONS = ["Rock", "Paper", "Scissors"];

    // Use Math.Random to generate a random number
    const random = Math.floor(Math.random() * OPTIONS.length);

    // Return the options through an array
    return (OPTIONS[random]);
}

// Create a function to get a human choice 
function getHumanChoice() {

    // Use prompt to ask the user
    let userChoice = prompt("Enter your choice between rock, paper and scissors: ").toLowerCase();;

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


    // Check who has scored more and declare the winner
    if (playerScore > computerScore) {
        console.log("You win! Computers won't be taking over soon");
    }
    else if (computerScore > playerScore) {
        console.log("You lose :( You're now part of the computers");
    }
    else if (computerScore === playerScore) {
        console.log("Draw! BUT HOW, you both are smart?");
    }
    else {
        console.log("Game over! No idea why, but yeah, it's over");
    }

    // Also log the score just in case LOL
    console.log("HUMAN: " + playerScore + " COMPUTER: " + computerScore);
}

// Play the game
playGame();