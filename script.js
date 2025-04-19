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

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
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

function displayResult(elem, text){
    console.log(text);
    if (text.match(/You win/)){
        humanScore++;
        elem.textContent = "You "+humanScore+" : "+computerScore+ " Computer";
    } else if (text.match(/You lose/)){
        computerScore++;
        elem.textContent = "You "+humanScore+" : "+computerScore+ " Computer";
    } else if (text.match(/draw/)){
        
        elem.textContent = "You "+humanScore+" : "+computerScore+ " Computer";
    } else {
        elem.textContent = text;
        humanScore = 0;
        computerScore = 0;
    }
    
    
}

const body = document.querySelector("body");
let humanScore = 0;
let computerScore = 0;

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.id = "rock";
body.appendChild(btnRock);

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.id = "paper"
body.appendChild(btnPaper);


const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.id = "scissors";
body.appendChild(btnScissors);

const div = document.createElement("div");
body.appendChild(div);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        displayResult(div, playRound(e.target.id));
        if (humanScore==5){
            displayResult(div, "CONGRATS!!! YOU WON.");
        } 
        if (computerScore==5){
            displayResult(div, "YOU LOST!")
        }
        
    })
})



