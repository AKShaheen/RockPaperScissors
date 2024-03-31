
const choices = ['rock','paper','scissors',];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'tie';
    }
    else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        return 'lose';
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        return 'lose';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'lose';
    }
    else{
        return 'win';
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));