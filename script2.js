// Create a getComputerChoice to randomly return one of the strings
function getComputerChoice() {

    // Store the choices in this variable
    const OPTIONS = ["Rock", "Paper", "Scissors"];
    // console.log(OPTIONS);

    // Create a variable that randomizes selection, knocks it down to floor value 
    // within the length of the array
    const RANDOMIZER = Math.floor(Math.random() * OPTIONS.length);
    // console.log(RANDOMIZER);

}

// Create a function to get human's choice
function getHumanChoice() {

    // Prompt the user for a choice
    const USERPROMPT = prompt("Enter your choice!")
    // console.log(USERPROMPT);
}

getComputerChoice();
//getHumanChoice();
