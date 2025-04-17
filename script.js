// console.log("hello world");

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    // console.log(computerChoice);
    if (computerChoice==0){
        return "rock";
    } else if (computerChoice==1){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    let humanChoice = prompt("Play rock, paper or scissors! ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            return "It's a draw!";
        } else if (computerChoice=="paper"){
            return "You lose! Paper beats Rock.";
        }
        return "You won! Rock beats Scissors.";
    } 
}

let computerChoice = getComputerChoice();
console.log(computerChoice)

let humanChoice = getHumanChoice();
console.log(humanChoice);

let result = playRound(humanChoice, computerChoice);
console.log(result)