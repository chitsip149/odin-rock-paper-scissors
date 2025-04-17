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
        return "You win! Rock beats Scissors.";
    } else if (humanChoice=="paper"){
        if (computerChoice=="rock"){
            return "You win! Paper beats Rock.";
        } else if (computerChoice=="paper"){
            return "It's a draw!";
        }
        return "You lose! Scissors beat Paper."
    }
    if (computerChoice=="rock"){
        return "You lose! Rock beats Scissors.";
    } else if (computerChoice=="paper"){
        return "You win! Scissors beat Paper";
    }
    return "It's a draw!";
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const win = /You win/;
    const lose = /You lose/;

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let result=playRound(humanChoice, computerChoice);
    console.log("You played "+humanChoice+".");
    console.log("Computer played "+computerChoice+".");
    console.log(result);
    if (result.match(win)){
        humanScore++;
    } else if (result.match(lose)){
        computerScore++;
    }

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    result=playRound(humanChoice, computerChoice);
    console.log("You played "+humanChoice+".");
    console.log("Computer played "+computerChoice+".");
    console.log(result);
    if (result.match(win)){
        humanScore++;
    } else if (result.match(lose)){
        computerScore++;
    }

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    result=playRound(humanChoice, computerChoice);
    console.log("You played "+humanChoice+".");
    console.log("Computer played "+computerChoice+".");
    console.log(result);
    if (result.match(win)){
        humanScore++;
    } else if (result.match(lose)){
        computerScore++;
    }

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    result=playRound(humanChoice, computerChoice);
    console.log("You played "+humanChoice+".");
    console.log("Computer played "+computerChoice+".");
    console.log(result);
    if (result.match(win)){
        humanScore++;
    } else if (result.match(lose)){
        computerScore++;
    }

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    result=playRound(humanChoice, computerChoice);
    console.log("You played "+humanChoice+".");
    console.log("Computer played "+computerChoice+".");
    console.log(result);
    if (result.match(win)){
        humanScore++;
    } else if (result.match(lose)){
        computerScore++;
    }
    if (humanScore>computerScore){
        return "YOU WIN!";
    } else if (humanScore<computerScore){
        return "YOU LOSE!";
    }
    return "DRAW";

}

// let computerChoice = getComputerChoice();
// console.log(computerChoice)

// let humanChoice = getHumanChoice();
// console.log(humanChoice);

// let result = playRound(humanChoice, computerChoice);
// console.log(result)

console.log(playGame());

