// Creating empty strings to store the choices
let compChoice = " ";

// Set the scores for the players
let playerScore = 0;
let computerScore = 0;

// Create an array for the scores
let humanSelection = [];
let computerSelection = [];

// //__________________________________________________
//                 CREATE A UI HERE
// //__________________________________________________


// Create scores here
const SCORES = document.createElement('h3');
SCORES.innerText = 'Scores ';
document.body.appendChild(SCORES);

const PLAYER_SCORE = document.createElement('h3');
PLAYER_SCORE.innerText = "Player: " + playerScore;
document.body.appendChild(PLAYER_SCORE);

const COMPUTER_SCORE = document.createElement('h3');
COMPUTER_SCORE.innerText = "Computer: " + computerScore;
document.body.appendChild(COMPUTER_SCORE);

// Element for showing actual selection
let ACTUAL_SELECT = document.createElement('p');
document.body.appendChild(ACTUAL_SELECT);

// Show who is winning
let PLAYER_SHOW = document.createElement('h3');
document.body.appendChild(PLAYER_SHOW);

let COMP_SHOW = document.createElement('h3');
document.body.appendChild(COMP_SHOW);

let DRAW_SHOW = document.createElement('h3');
document.body.appendChild(DRAW_SHOW);

// Winner or lose
let WINNER_SHOW = document.createElement('h1');
document.body.appendChild(WINNER_SHOW);

let LOSER_SHOW = document.createElement('h1');
document.body.appendChild(LOSER_SHOW);

//__________________________________________________

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

    // Select the ID of the three buttons
    const ROCK = document.getElementById("ROCK"); // Select Rock ID
    const PAPER = document.getElementById("PAPER"); // Select Paper ID
    const SCISSORS = document.getElementById("SCISSORS"); // Select Scissors ID

    // Pass to event listener
    ROCK?.addEventListener('click', () => {
        playRound("Rock", getComputerChoice());
    });

    PAPER?.addEventListener('click', () => {
        playRound("Paper", getComputerChoice());
    });

    SCISSORS?.addEventListener('click', () => {
        playRound("Scissors", getComputerChoice());
    });
}

//__________________________________________________

// Writing a logic to play the round of the game
function playRound(humanSelection, computerSelection) {

    PLAYER_SHOW.innerText = "";
    COMP_SHOW.innerText = "";
    DRAW_SHOW.innerText = "";
    WINNER_SHOW.innerText = "";
    LOSER_SHOW.innerText = "";

    // Run a if statement to check the choices
    if (humanSelection === computerSelection) {
        DRAW_SHOW.innerText = "Draw? Draw!";

        // Also log the score just in case LOL
        PLAYER_SCORE.innerText = "Player: " + playerScore;
        COMPUTER_SCORE.innerText = "Computer: " + computerScore;

    }

    else if ((humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")) {
        PLAYER_SHOW.innerText = "Nice! " + humanSelection + " beats " + computerSelection;
        playerScore++;

        // Also log the score just in case LOL
        PLAYER_SCORE.innerText = "Player: " + playerScore;
        COMPUTER_SCORE.innerText = "Computer: " + computerScore;
    }

    else if ((humanSelection === "Rock" && computerSelection === "Paper") ||
        (humanSelection === "Paper" && computerSelection === "Scissors") ||
        (humanSelection === "Scissors" && computerSelection === "Rock")) {
        COMP_SHOW.innerText = "Nope... " + computerSelection + " beats " + humanSelection;
        computerScore++;

        // Also log the score just in case LOL
        PLAYER_SCORE.innerText = "Player: " + playerScore;
        COMPUTER_SCORE.innerText = "Computer: " + computerScore;
    }

    else {
        ACTUAL_SELECT.textContent = "Select between Rock, Paper and Scissors";
    }

    if (playerScore === 5) {

        WINNER_SHOW.innerText = "YOU WIN! The final score is: " + playerScore + " to " + computerScore;

        var delayInMilliseconds = 1000;

        setTimeout(function () {
            restart();
        }, delayInMilliseconds);
    }

    else if (computerScore === 5) {

        LOSER_SHOW.innerText = "YOU LOST! The final score is: " + playerScore + " to " + computerScore;

        var delayInMilliseconds = 1000;

        setTimeout(function () {
            restart();
        }, delayInMilliseconds);
    }
}

//__________________________________________________

function playGame() {

    // Create variable to access the data from playRound function
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Allows to push the values directly back into the array to fill it up
    humanSelection.push(humanChoice);
    computerSelection.push(computerChoice);
}

function restart() {

    PLAYER_SHOW.innerText = "";
    COMP_SHOW.innerText = "";
    DRAW_SHOW.innerText = "";
    WINNER_SHOW.innerText = "";
    LOSER_SHOW.innerText = "";

    playerScore = 0;
    PLAYER_SCORE.innerText = "Player: " + playerScore;

    computerScore = 0;
    COMPUTER_SCORE.innerText = "Computer: " + computerScore;

}

//__________________________________________________

// Play the game
playGame();