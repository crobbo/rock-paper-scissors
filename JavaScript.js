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
            displayResult.textContent = 'You Lose! Rock beats Scissors';
            resultLastGame.appendChild(displayResult); compScore++;
            break;

            case (compChoice == 'paper') && (userChoice == 'scissors'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Win! Scissors beats Paper';
            resultLastGame.appendChild(displayResult); userScore++;
            break;

            case (compChoice == 'scissors') && (userChoice == 'scissors'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'Draw. You both chose Scissors!';
            resultLastGame.appendChild(displayResult); drawScore++;
            break;

            case (compChoice == 'rock') && (userChoice == 'rock'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'Draw. You both chose Rock!';
            resultLastGame.appendChild(displayResult); drawScore++;
            break;

            case (compChoice == 'scissors') && (userChoice == 'rock'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Win! Rock beats Scissors';
            resultLastGame.appendChild(displayResult); userScore++;
            break;

            case (compChoice == 'paper') && (userChoice == 'rock'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Lose! Paper beats Rock';
            resultLastGame.appendChild(displayResult); compScore++;
            break;

            case (compChoice == 'rock') && (userChoice == 'paper'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Win! Paper beats Rock!';
            resultLastGame.appendChild(displayResult); userScore++;
            break;

            case (compChoice == 'scissors') && (userChoice == 'paper'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Lose! Scissors beats Paper';
            resultLastGame.appendChild(displayResult); compScore++;
            break;

            case (compChoice == 'paper') && (userChoice == 'paper'):
            displayResult.classList.add('display-result');
            displayResult.textContent = 'You Draw. You both chose Paper';
            resultLastGame.appendChild(displayResult); drawScore++;
            break;

        }  

}

const resultLastGame = document.querySelector('#result');
const displayResult = document.createElement('p');
// playerScore.classList.add('playerScore');
// playerScore.textContent = 'This is the glorious text-content!';
// resultLastGame.appendChild(playerScore);

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

function finalScore() {

    switch (true){
          case userScore > compScore:
          console.log([userScore + ' : ' + compScore] + ' YOU ARE THE WINNER!');
          break;

          case userScore < compScore:
          console.log([userScore + ' : ' + compScore] + ' YOU LOSE :(' );
          break;

          case userScore === compScore:
          console.log([userScore + ' : ' + compScore] + ' DRAW');
          break; 
      }
                        
} 

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    playRound('Rock');
    finalScore();
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    playRound('paper');
    finalScore();
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    playRound('scissors');
    finalScore();

});