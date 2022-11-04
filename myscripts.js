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

function playRound(playerSelection = "", computerSelection = "") {
  if (playerSelection === "" || computerSelection === "") {
    return "Either player or computer selection is empty";
  }  
  let player = playerSelection.toLowerCase().trim();
  let computer = computerSelection.toLowerCase().trim();
  if (player === computer) {
    return `It's a draw! You both selected ${player}!`;
  } else if(player === "rock" && computer === "scissors") {
    return `You win! Rock beats Scissors!`;
  } else if(player === "rock" && computer === "paper") {
    return `You Lose! Paper beats Rock!`;
  } else if(player === "paper" && computer === "scissors") {
    return `You Lose! Scissors beats Paper!`;
  } else if(player === "paper" && computer === "rock") {
    return `You win! Paper beats rock!`;
  } else if(player === "scissors" && computer === "rock") {
    return `You Lose! Rock beats!`;
  } else if(player === "scissors" && computer === "paper") {
    return `You win! Scissors beats Paper!`;
  } else {
    return "Something went wrong, Player and Computer Selections must be rock, paper or scissors only.";
  }
}