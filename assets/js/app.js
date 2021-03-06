var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userWins = 0;
var compWins = 0;
var remainingGuess, userInput, computerChoice;

// this starts the game
// problem is there is  one off error i can't quite fix
function gameStart() {
  remainingGuess = 10;
  // one off error is probably due to userInput
  userInput = [];
  computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function userWin() {
  userWins++;
  gameStart();
}

function compWin() {
  compWins++;
  gameStart();
}

// captures keystroke to create variable
function userEntered(keyStroke) {
  remainingGuess--;
  userInput.push(keyStroke);
  console.log(keyStroke);
}

function gameRender() {
  var userWinGame = document.getElementById("userWinner");
  var compWinGame = document.getElementById("compWinner");
  var remainGuess = document.getElementById("inputRemain");
  var letterGuessed = document.getElementById("userChoice");
  userWinGame.innerHTML = userWins;
  compWinGame.innerHTML = compWins;
  remainGuess.innerHTML = remainingGuess;
  letterGuessed.innerHTML = userInput.join('');
  console.log(userInput);
}

// this collects user input
document.onkeydown = function(event) {
  var userKeyStroke = event.key;
  if (userKeyStroke === computerChoice) {
    userWin();
  } else if (remainingGuess - 1 === 0) {
    compWin();
  } else {
    userEntered(userKeyStroke);
  }
  gameRender();
}

gameStart();
gameRender();
