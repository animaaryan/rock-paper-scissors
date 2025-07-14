// Create a getComputerChoice to randomly return one of the strings
function getComputerChoice() {

    // Store the choices in this variable
    const OPTIONS = ["rock", "paper", "scissors"];
    // console.log(OPTIONS);

    // Create a variable that randomizes selection, knocks it down to floor value 
    // within the length of the array
    const RANDOMIZER = Math.floor(Math.random() * OPTIONS.length);
    // console.log(RANDOMIZER);

    return OPTIONS[RANDOMIZER];
}

// Create a function to get human's choice
function getHumanChoice() {

    // Prompt the user for a choice
    const USERPROMPT = prompt("Enter your choice!")
    // console.log(USERPROMPT);

    return USERPROMPT;
}


// Function to play the game 5 times 
function playGame() {

    // Creating two variables to keep a track of the user's scores
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        // Creating an if statement to check the selection
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You score!");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You score!");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You score!");
            humanScore++;
        } else {
            console.log("Computer scores!")
            computerScore++;
        }
    }
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
        console.log("YOU WIN! The final score is: " + humanScore + " to " + computerScore);
    }
    else {
        console.log("YOU LOST! The final score is: " + humanScore + " to " + computerScore);
    }
}

playGame();
