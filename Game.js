let playOption=["rock","paper","scissors"];

function getComputerChoice(){
    let index=Math.floor(Math.random()*3);
    let compChoice=playOption[index];
    return compChoice;
}

function playRound(playerSelection,computerSelection){
    let playerChoice=playerSelection.toLowerCase();  //Converts the players input to small case
    if((playerChoice==="rock" && computerSelection==="scissors")||(playerChoice==="paper" && computerSelection==="rock")||(playerChoice==="scissors" && computerSelection==="paper")){
        return `You Win ${playerSelection} beats ${computerSelection}`;
    }
    else if((computerSelection==="rock" && playerChoice==="scissors")||(computerSelection==="paper" && playerChoice==="rock")|| (computerSelection==="scissors" && playerChoice==="paper")){
        return`You Lose ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection===playerChoice){
        return "Round tied";
    }
    else{
        return "Check your Entry";
    }
}