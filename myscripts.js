function getComputerChoice(){
  // Returns a random integer from 0 to 2:
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0){
    return "Rock";
  } else if(randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let round = 0;
let numberPlayerWins = 0;
let numberComputerWins = 0;

// Returns the winner????
function playRound(playerSelection = "", computerSelection = "") {
  while (playerSelection === "") {
    console.log("Please provide a valid selection.");
    playerSelection = prompt("Rock, Paper, Scissors?","");
    return null;
  }  
  let player = playerSelection.toLowerCase().trim();
  let computer = computerSelection.toLowerCase().trim();
  let resultString = "";
  round++;

  if (player === computer) {
    resultString = `It's a draw! You both selected ${player}!`;
  } else if(player === "rock" && computer === "scissors") {
    resultString = `You win! Rock beats Scissors!`;
    numberPlayerWins++;
  } else if(player === "rock" && computer === "paper") {
    resultString = `You Lose! Paper beats Rock!`;
    numberComputerWins++;
  } else if(player === "paper" && computer === "scissors") {
    resultString = `You Lose! Scissors beats Paper!`;
    numberComputerWins++;
  } else if(player === "paper" && computer === "rock") {
    resultString = `You win! Paper beats rock!`;
    numberPlayerWins++;
  } else if(player === "scissors" && computer === "rock") {
    resultString = `You Lose! Rock beats Scissors!`;
    numberComputerWins++;
  } else if(player === "scissors" && computer === "paper") {
    resultString = `You win! Scissors beats Paper!`;
    numberPlayerWins++;
  } else {
    console.log("Something went wrong, Player and Computer Selections must be rock, paper or scissors only.");
    return null;
  }

  addResultToWindow(resultString, playerSelection);
  updateWindow();
  checkToEndProgram();
}

const title = document.querySelector('h1');
function checkToEndProgram(){
  const newTitle = document.createElement('h1');
  if (numberPlayerWins >=5) {
    newTitle.textContent = "You Win!! Please refresh the window to play again."
  } else if (numberComputerWins >= 5) {
    newTitle.textContent = "You Lose :( Please refresh to play again."
  }

  title.appendChild(newTitle);
}

const results = document.querySelector('.results');
function addResultToWindow(resultString, playerSelection) {
  //const newResult = document.createElement('p'); 
  const roundElement = document.createElement('h3');
  const choiceElement = document.createElement('p');
  const resultElement = document.createElement('p');
  //newResult.textContent = `Round ${round} <br> You chose ${playerSelection} <br> \n ${resultString}`;
  roundElement.textContent = `Round ${round}`;
  choiceElement.textContent = `You chose ${playerSelection}`;
  resultElement.textContent = `${resultString}`;
 
  //results.appendChild(newResult);
  results.appendChild(roundElement);
  results.appendChild(choiceElement);
  results.appendChild(resultElement);
}

const winsElement = document.querySelector('#wins')
const lossElement = document.querySelector('#losses')
function updateWindow(roundNumber = null) {
  winsElement.textContent = `Number of Wins: ${numberPlayerWins}`;
  lossElement.textContent = `Number of Losses: ${numberComputerWins}`;
}

/*For each button we get the text content of it, then use the text
 content as the player choice to play rock paper scissors.*/
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.textContent;
    playRound(playerSelection, getComputerChoice());
  });
});