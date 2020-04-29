let userScore = 0;
let compScore = 0;  
let drawScore = 0

function playRound(playerSelection) {
      
        computerSelection = computerPlay()
        compChoice = computerSelection.toLowerCase();
        userChoice = playerSelection.toLowerCase();

        switch (false){
            case userChoice == 'rock' || userChoice == 'scissors' || userChoice == 'scissor' || userChoice == 'paper':
            alert('invalid choice');
            break;
    
        }

        switch(true) {
            case (compChoice == 'rock') && (userChoice == 'scissors'):        
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Lose! Rock beats Scissors'
            resultsDiv.appendChild(displayResult); compScore++;
            break;

            case (compChoice == 'paper') && (userChoice == 'scissors'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Win! Scissors beats Paper';
            resultsDiv.appendChild(displayResult); userScore++;
            break;

            case (compChoice == 'scissors') && (userChoice == 'scissors'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'Draw. You both chose Scissors!';
            resultsDiv.appendChild(displayResult); drawScore++;
            break;

            case (compChoice == 'rock') && (userChoice == 'rock'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'Draw. You both chose Rock!';
            resultsDiv.appendChild(displayResult); drawScore++;
            break;

            case (compChoice == 'scissors') && (userChoice == 'rock'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Win! Rock beats Scissors';
            resultsDiv.appendChild(displayResult); userScore++;
            break;

            case (compChoice == 'paper') && (userChoice == 'rock'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Lose! Paper beats Rock';
            resultsDiv.appendChild(displayResult); compScore++;
            break;

            case (compChoice == 'rock') && (userChoice == 'paper'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Win! Paper beats Rock!';
            resultsDiv.appendChild(displayResult); userScore++;
            break;

            case (compChoice == 'scissors') && (userChoice == 'paper'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Lose! Scissors beats Paper';
            resultsDiv.appendChild(displayResult); compScore++;
            break;

            case (compChoice == 'paper') && (userChoice == 'paper'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Draw. You both chose Paper';
            resultsDiv.appendChild(displayResult); drawScore++;
            break;

        }  

        // ongoingScore.classList.add('ongoingScore');
        // ongoingScore.textContent = 'Your Score ' + userScore + ' : ' + compScore + '   Computer Score';
        // totalScore.appendChild(ongoingScore);

}

const resultsDiv = document.querySelector('#result');
const displayResult = document.createElement('p');
displayResult.setAttribute("id", "last-round");

const totalScore = document.querySelector('#total-score');
const ongoingScore = document.createElement('p');




function computerPlay() {
    switch (true) {
        case Math.random() <= 0.33:
        return 'Rock';
        break;

        case 0.33 < Math.random() <= 0.66:
        return 'Scissors';
        break;

        case 0.66 < Math.random() <= 1:
        return 'Paper';

    }
}

function gameOver(){
    if (userScore + compScore + drawScore === 5){
        if(userScore > compScore){
            ongoingScore.classList.add('ongoingScore');
            ongoingScore.textContent = 'YOU WIN!';
            totalScore.appendChild(ongoingScore);
            document.getElementById('last-round').style.visibility = "hidden";
        } else if(compScore > userScore) {
            ongoingScore.classList.add('ongoingScore');
            ongoingScore.textContent = 'YOU LOSE!';
            totalScore.appendChild(ongoingScore);
            document.getElementById('last-round').style.visibility = "hidden";
        } else {
            ongoingScore.classList.add('ongoingScore');
        ongoingScore.textContent = 'DRAW!';
        totalScore.appendChild(ongoingScore);
        document.getElementById('last-round').style.visibility = "hidden";
        }
        
    } else {
        ongoingScore.classList.add('ongoingScore');
        ongoingScore.textContent = 'Your Score ' + userScore + ' : ' + compScore + '   Computer Score';
        totalScore.appendChild(ongoingScore);
    }

}


const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    playRound('Rock');
    gameOver();
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    playRound('paper');
    gameOver();
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors');
    gameOver();

});



// function finalScore() {

    //     switch (true){
    //           case userScore > compScore:
    //           console.log([userScore + ' : ' + compScore] + ' YOU ARE THE WINNER!');
    //           break;
    
    //           case userScore < compScore:
    //           console.log([userScore + ' : ' + compScore] + ' YOU LOSE :(' );
    //           break;
    
    //           case userScore === compScore:
    //           console.log([userScore + ' : ' + compScore] + ' DRAW');
    //           break; 
    //       }
                            
    // } 