let choices  = ['rock','paper','scissors']
let playerScore = 0, computerScore = 0;
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const subTitleEl = document.querySelector('.sub-title');
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}
function checkScore(){
    if(playerScore === 5){
        updateStates('playerWin');
    }else if(computerScore === 5){
        updateStates('computerWin');
    }else{
        return 0 ;
    }
}
function updateStates(result){
    if(result === 'win'){
        playerScoreEl.textContent = `👨 Your Score : ${playerScore}`
        subTitleEl.textContent = `🤖You ${result}, Just a Lucky One! `
    }else if(result === 'lose'){
        computerScoreEl.textContent = `🤖 My Score : ${computerScore}`
        subTitleEl.textContent = `🤖 YOU ${result.toUpperCase()}, I've Told You! easy`
    }else if(result === 'playerWin'){
        playerScoreEl.textContent = `👨 WINNER!..`
        computerScoreEl.textContent = ``
        subTitleEl.textContent = `🤖 You Got Me This Time`
    }else if(result === 'computerWin'){
        playerScoreEl.textContent = `👨 LOSER!..`
        computerScoreEl.textContent = ``
        subTitleEl.textContent = `🤖 HAHAHAHAHA, My Game, My World`
    }else{
        subTitleEl.textContent = `🤖 It's a ${result.toUpperCase()}, I Can Read Your MIND! HAHAHA`;
    }
}
function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return 'tie';
    }
    else if(playerSelection === 'rock' && computerSelection ==='scissors'){
        playerScore ++;
        return 'win';
    }
    else if(playerSelection ==='scissors' && computerSelection === 'paper'){
        playerScore ++;
        return 'win';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore ++;
        return 'win';
    }
    else{
        computerScore ++;
        return 'lose';
    }
}
let selection = document.querySelector('.btn-container');
selection.addEventListener('click', function(e){
        const computerChoice = getComputerChoice();
        let result = '';
        let target = e.target;
        switch(target.className){
            case 'rock':
                result = playRound('rock',computerChoice);
                updateStates(result);
                break;
            case 'paper':
                result = playRound('paper',computerChoice);
                console.log(result);
                break;
            case 'scissors':
                result = playRound('scissors',computerChoice);
                console.log(result);
                break;
        }
        checkScore();
});
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
