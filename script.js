let choices  = ['rock','paper','scissors']
let playerScore = 0, computerScore = 0;
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const reset = document.querySelector('.reset');
const subTitleEl = document.querySelector('.sub-title');
const buttons = document.getElementsByClassName('btn');
const containerEl = document.querySelector('.container');
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function changeButtonState(state){
    switch(state){
        case 'disable':
            for(let i = 0; i< buttons.length; i++){
                buttons[i].disabled = true;
            }
            break;
        case 'enable':
            for(let i = 0; i< buttons.length; i++){
                buttons[i].disabled = false;
            }
            break;
    }
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
        playerScoreEl.classList.add('hidden');
        computerScoreEl.classList.add('hidden');
        reset.classList.remove('hidden');
        subTitleEl.style.color = '#62A87C'
        changeButtonState('disable');
        subTitleEl.textContent = `🤖 You WIN, Got Me This Time`

    }else if(result === 'computerWin'){
        playerScoreEl.classList.add('hidden');
        computerScoreEl.classList.add('hidden');
        reset.classList.remove('hidden');
        changeButtonState('disable');
        subTitleEl.style.color = '#FB3640'
        subTitleEl.textContent = `🤖 HAHA YOU LOSE, My Game, My World`
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
            case 'rock btn':
                result = playRound('rock',computerChoice);
                updateStates(result);
                break;
            case 'paper btn':
                result = playRound('paper',computerChoice);
                updateStates(result);
                break;
            case 'scissors btn':
                result = playRound('scissors',computerChoice);
                updateStates(result);
                break;
        }
        checkScore();
});
reset.addEventListener('click',function(){
    playerScoreEl.classList.remove('hidden');
    computerScoreEl.classList.remove('hidden');
    reset.classList.add('hidden');
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = `👨 Your Score : 0`;
    computerScoreEl.textContent = `🤖 My Score : 0`;
    subTitleEl.textContent = `🤖 Can You Beat ME? huh!`;
    subTitleEl.style.color = '#778DA9';
    changeButtonState('enable');
});
