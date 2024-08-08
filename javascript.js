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

let humanChoice;
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const p1 = document.createElement("p");
p1.classList.add("p1");
container.appendChild(p1);
const p2 = document.createElement("p");
p2.classList.add("p2");
container.appendChild(p2);



function playRound() {
    computerSelection();

    switch (humanChoice + computerChoice) {
        case "RockPaper":
         computerScore ++;
         break;
        case "RockScissors":
         humanScore ++;
         break;
        case "RockRock":
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
    
   
    p1.textContent = `You chose ${humanChoice}`;
    
    
    p2.textContent = `The computer chose ${computerChoice}`;
    

    const computerResult =  document.querySelector("#computerResult");
    computerResult.textContent = `Computer Score: ${computerScore}`;

    const humanResult = document.querySelector("#humanResult");
    humanResult.textContent = `Your Score: ${humanScore}`;

    if ( humanScore === 5 || computerScore === 5) {

        if (humanScore > computerScore) {
            const h3 = document.createElement("h3");
            h3.classList.add("h3");
            h3.textContent = "You win!"
            container.appendChild(h3);
        } else if (humanScore < computerScore) {
            const h3 = document.createElement("h3");
            h3.classList.add("h3");
            h3.textContent = "Computer win!"
            container.appendChild(h3);
        } else {
            const h3 = document.createElement("h3");
            h3.classList.add("h3");
            h3.textContent = "It's a tie!"
            container.appendChild(h3);
        };

        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
};

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

function rockChoice() {
    humanChoice = "Rock";
    playRound();
}

function paperChoice() {
    humanChoice = "Paper";
    playRound();
}

function scissorsChoice() {
    humanChoice = "Scissors";
    playRound();
}

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);

