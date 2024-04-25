let result;
function getComputerChoice() {
    result = Math.floor(Math.random() * 3);
    }
let computerChoice;
function computerSelection () {
getComputerChoice();
if (result == 0) {
    computerChoice = "Rock";
} else if (result == 1) {
    computerChoice = "Scissors";
} else {
    computerChoice = "Paper";
}

}
let choice;

function getHumanChoice () {
    choice = prompt("Enter Rock, Paper or Scissors", " ");
}

let humanChoice;
function humanSelection() {
    getHumanChoice();
    return humanChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

let finalresult = humanChoice + computerChoice;
function playRound() {
    humanSelection();
    computerSelection();

    switch (humanChoice + computerChoice) {
        case "RockPaper":
         console.log("You lose! Paper beats Rock!");
         computerScore ++;
         break;
        case "RockScissors":
         console.log("You win! Rock beats Scissors!");
         humanScore ++;
         break;
        case "RockRock":
         console.log("It's a draw!");
         break;
        case "PaperRock":
         console.log("You win! Paper beats Rock!");
         humanScore ++;
         break;
        case "PaperScissors":
         console.log("You lose! Scissors beats Paper!");
         computerScore ++;
         break;
        case "PaperPaper":
         console.log("It's a draw!");
         break;
        case "ScissorsRock":
         console.log("You lose! Rock beats Scissors!");
         computerScore ++;
         break;
        case "ScissorsPaper":
         console.log("You win! Scissors beat Paper!");
         humanScore ++;
         break;
        case "ScissorsScissors":
         console.log("It's a draw!");
         break;
    }
    console.log("You chose " + humanChoice);
    console.log("The computer chose " + computerChoice);
    console.log("Your score is " + humanScore);
    console.log("The computer's score is " + computerScore);
}

function playGame () {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame ();

