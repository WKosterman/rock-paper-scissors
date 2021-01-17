let scoreP = 0;
let scoreC = 0;


const container = document.querySelector('#prompt');

const promptText = document.createElement('div');
promptText.classList.add('promptText');
promptText.textContent = "Let's play Rock, Paper, Scisors! We play first to five.";

container.appendChild(promptText);

console.log(container.className);

const scoreText = document.createElement('div');
scoreText.classList.add('scoreText');
container.appendChild(scoreText);

scoreText.textContent = textContentCreator(scoreP, scoreC);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    promptText.textContent = playRound(button.id,computerPlay());
    if (scoreP  >= 5 || scoreC >= 5) {
        scoreText.textContent = ("the final score is: player " + scoreP + " to computer " + scoreC + ".");
        scoreP = 0;
        scoreC = 0;
    };
  });
});


function textContentCreator (scoreP, scoreC) {
    let playerstring = "Player: " + scoreP
    let computerstring = "Computer: " + scoreC
    let divider = " - "
    return playerstring + divider + computerstring
}

// Depreciated
function convertToProper (string) { 
  let upperStringPart = string[0].toUpperCase();
  let lowerStringPart = string.slice(1).toLowerCase();
  return upperStringPart + lowerStringPart;
}


function playRound (playerSelection, computerSelection) {

let outcome

switch (playerSelection) {
  case "Rock":
    switch (computerSelection) {
      case "Rock":
      outcome = "draw";
      break;

      case "Paper":
      outcome = "computer";
      break;

      case "Scissors":
      outcome = "player";
      break;
    }
    break;

  case "Paper":
  switch (computerSelection) {
      case "Rock":
      outcome = "player";
      break;

      case "Paper":
      outcome = "draw";
      break;

      case "Scissors":
      outcome = "computer";
      break;
    }
    break;
  case "Scissors":
  switch (computerSelection) {
      case "Rock":
      outcome = "computer";
      break;

      case "Paper":
      outcome = "player";
      break;

      case "Scissors":
      outcome = "draw";
      break;

    }
}

switch (outcome) {
  case "player":
  scoreText.textContent = textContentCreator(++scoreP, scoreC);
  return "You win! " + playerSelection + " beats " + computerSelection;
  

  case "computer":
  scoreText.textContent = textContentCreator(scoreP, ++scoreC);
  return "You Lose! " + computerSelection + " beats " + playerSelection;

  case "draw":
    return "It's a draw!";

  default:
  return "Score not registered.";
}


}


function computerPlay() {
  let throwNumber = getThrowNumber(3)
  switch (throwNumber) {

    case 0:
    return "Rock"

    case 1:
    return "Paper"

    case 2:
    return "Scissors"

  }

}

function getThrowNumber(nThrowOptions) {
let throwNumber = Math.floor(Math.random() * nThrowOptions);
return throwNumber;
}

/*
function game(rounds) {

  let i 
  let computerThrow
  let playerThrow

  for (i = 1; i <= rounds; i++) {

    computerThrow = computerPlay()
    playerThrow = prompt("What do you throw?")
    playerThrow = convertToProper(playerThrow)
    console.log("Throw " + i + ": computer throws " + computerThrow + ", player throws " + playerThrow + ".");
    console.log(playRound(playerThrow,computerThrow))
  }

console.log("the final score is: player " + scoreP + " to computer " + scoreC + ".");


}

*/