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

const FINAL_SCORE = document.createElement('h3');
FINAL_SCORE.innerText =  playerScore + " : " + computerScore;
document.body.appendChild(FINAL_SCORE);

// Element for showing actual selection
let ACTUAL_SELECT = document.createElement('p');
document.body.appendChild(ACTUAL_SELECT);

//Style here because i'm lazy to search how to in CSS
SCORES.style.color = "#FF99C9";
SCORES.style.fontSize = "3rem";
SCORES.style.display = "flex";
SCORES.style.alignItems = "center";
SCORES.style.justifyContent = "center";
SCORES.style.fontFamily = "Rubik Spray Paint, serif";
SCORES.style.fontWeight = "400";

FINAL_SCORE.style.fontSize = "3rem";
FINAL_SCORE.style.display = "flex";
FINAL_SCORE.style.alignItems = "center";
FINAL_SCORE.style.justifyContent = "center";
FINAL_SCORE.style.border = "#000 solid 2px";
FINAL_SCORE.style.margin = "0px 30%";

//__________________________________________________


// Show who is winning
let player_show = document.createElement('h3');
document.body.appendChild(player_show);

let comp_show = document.createElement('h3');
document.body.appendChild(comp_show);

let draw_show = document.createElement('h3');
document.body.appendChild(draw_show);

// Winner or lose
let winner_show = document.createElement('h1');
document.body.appendChild(winner_show);

let loser_show = document.createElement('h1');
document.body.appendChild(loser_show);

//Style here because i'm lazy to search how to in CSS
player_show.style.color = "#9EB25D";
player_show.style.display = "flex";
player_show.style.alignItems = "center";
player_show.style.justifyContent = "center";

comp_show.style.color = "#AD343E";
comp_show.style.display = "flex";
comp_show.style.alignItems = "center";
comp_show.style.justifyContent = "center";

draw_show.style.color = "#A88FAC";
draw_show.style.display = "flex";
draw_show.style.alignItems = "center";
draw_show.style.justifyContent = "center";

winner_show.style.color = "#9EB25D";
winner_show.style.display = "flex";
winner_show.style.alignItems = "center";
winner_show.style.justifyContent = "center";

loser_show.style.color = "#AD343E";
loser_show.style.display = "flex";
loser_show.style.alignItems = "center";
loser_show.style.justifyContent = "center";

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

    player_show.innerText = "";
    comp_show.innerText = "";
    draw_show.innerText = "";
    winner_show.innerText = "";
    loser_show.innerText = "";

    // Run a if statement to check the choices
    if (humanSelection === computerSelection) {
        draw_show.innerText = "Draw? Draw!";

        // Also log the score just in case LOL
        FINAL_SCORE.innerText =  playerScore + " : " + computerScore;
    }

    else if ((humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")) {
        player_show.innerText = "Nice! " + humanSelection + " beats " + computerSelection;
        playerScore++;

        // Also log the score just in case LOL
        FINAL_SCORE.innerText =  playerScore + " : " + computerScore;
    }

    else if ((humanSelection === "Rock" && computerSelection === "Paper") ||
        (humanSelection === "Paper" && computerSelection === "Scissors") ||
        (humanSelection === "Scissors" && computerSelection === "Rock")) {
        comp_show.innerText = "Nope... " + computerSelection + " beats " + humanSelection;
        computerScore++;

        // Also log the score just in case LOL
        FINAL_SCORE.innerText =  playerScore + " : " + computerScore;
    }

    else {
        ACTUAL_SELECT.textContent = "Select between Rock, Paper and Scissors";
    }

    if (playerScore === 5) {

        winner_show.innerText = "YOU WIN! The final score is: " + playerScore + " to " + computerScore;

        var delayInMilliseconds = 1000;

        setTimeout(function () {
            restart();
        }, delayInMilliseconds);
    }

    else if (computerScore === 5) {

        loser_show.innerText = "YOU LOST! The final score is: " + playerScore + " to " + computerScore;

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

    player_show.innerText = "";
    comp_show.innerText = "";
    draw_show.innerText = "";
    winner_show.innerText = "";
    loser_show.innerText = "";

    playerScore = 0;
    computerScore = 0;
    FINAL_SCORE.innerText =  playerScore + " : " + computerScore;
}

//__________________________________________________

// Play the game
playGame();