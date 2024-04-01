
const choices = ['rock','paper','scissors'];
function getPlayerChoice(){
    const playerChoice = prompt('Please choose rock, paper, or scissors');
    return playerChoice.toLowerCase();
}
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'tie';
    }
    else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        return 'win';
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        return 'win';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'win';
    }
    else{
        return 'lose';
    }
}

function playGame(flag){
    let win=0,lose=0,tie=0;
    while(flag !=0){
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const playerChoice = getPlayerChoice();
        const result = playRound(playerChoice, computerChoice);
        if(result === 'win'){
            console.log('You Win!');
            win ++;
            flag--;
        }
        else if(result === 'lose'){
            console.log('You Lose!');
            lose++;
            flag--;
        }
        else if(result === 'tie'){
            console.log('You Tied!');
            tie++;
            flag--;
        }
    }
    console.log(win,lose,tie);
    if(win > lose && win > tie){
        alert('You Win!');
    }else if(lose > tie && lose > win){
        alert('You Lose!');
    }else{
        alert('Tie Breaker!');
        playGame(1);
    }   
}
