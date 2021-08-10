var openView = document.querySelector(".open-view");
var gameView = document.querySelector(".game-view");
var resultView = document.querySelector(".result-view");
var classicGameBtn = document.querySelector(".classic-btn");
var difficultGameBtn = document.querySelector(".difficult-btn");
var goHomeBtn = document.querySelector(".gohome-btn");
var startOverBtn = document.querySelector(".start-over-btn");
var alienImg = document.getElementById("alien");
var lizzardImg = document.getElementById("lizzard");
var fightersBox = document.querySelector(".fighters-box");
var resultBox = document.querySelector(".result-box");
var resultAlert = document.querySelector(".result-view>h2");
var human = new Player("Human");
var computer = new Player("Computer");
var game;
var humanWins = document.getElementById("human-wins");
var computerWins = document.getElementById("computer-wins");
var isClickValid;

window.addEventListener("load", retrieveWins);
classicGameBtn.addEventListener("click", showClassicGame);
difficultGameBtn.addEventListener("click", showDifficultGame);
goHomeBtn.addEventListener("click", showHomePage);
startOverBtn.addEventListener("click", startOver);
fightersBox.addEventListener("click", function (event) {
  pickFighter(event);
  startGame();
  displayResult();
  setTimeout(backToGame, 2000);
  saveResult();
});

function retrieveWins() {
  if (localStorage.getItem("Human") && localStorage.getItem("Computer")) {
    human.wins = human.getWinsFromStorage();
    computer.wins = computer.getWinsFromStorage();
    humanWins.innerText = human.wins;
    computerWins.innerText = computer.wins;
  }
  game = new Game(human, computer);
}

function showClassicGame() {
  openView.classList.add("hidden");
  gameView.classList.remove("hidden");
  alienImg.classList.add("hidden");
  lizzardImg.classList.add("hidden");
  game.selectGame("classic");
}

function showDifficultGame() {
  openView.classList.add("hidden");
  gameView.classList.remove("hidden");
  gameView.classList.remove("hidden");
  alienImg.classList.remove("hidden");
  lizzardImg.classList.remove("hidden");
  game.selectGame("difficult");
}

function showHomePage() {
  gameView.classList.add("hidden");
  openView.classList.remove("hidden");
}

function pickFighter(event) {
  if (event.target.tagName !== "IMG") {
    alert("Oops, you didn't choose a fighter.");
    isClickValid = false;
    return;
  } else if (event.target.tagName === "IMG") {
    isClickValid = true;
  }
  human.fighter = event.target.id;
  var randomIndex = Math.floor(Math.random() * game.fighters.length);
  computer.fighter = game.fighters[randomIndex];
}

function startGame() {
  if (isClickValid === false) {
    return;
  }
  result = game.checkWin();
  game.updateScore(result);
}

function displayResult() {
  if (isClickValid === false) {
    return;
  }
  humanWins.innerText = human.wins;
  computerWins.innerText = computer.wins;
  gameView.classList.add("hidden");
  resultView.classList.remove("hidden");

  switch (result) {
    case "draw":
      resultAlert.innerText = "😼 IT'S A DRAW! 😼";
      break;
    case true:
      resultAlert.innerText = "👩‍🌾 HUMAN WINS THIS ROUND! 👩‍🌾";
      break;
    case false:
      resultAlert.innerText = "🖥 COMPUTER WINS THIS ROUND! 🖥";
    default:
      break;
  }

  var humanFighterImg = document.getElementById(`${human.fighter}`);
  resultBox.appendChild(humanFighterImg.cloneNode());
  var compFighterImg = document.getElementById(`${computer.fighter}`);
  resultBox.appendChild(compFighterImg.cloneNode());
}

function backToGame() {
  if (isClickValid === false) {
    return;
  }
  resultAlert.innerText = "";
  resultBox.innerHTML = "";
  gameView.classList.remove("hidden");
  resultView.classList.add("hidden");
}

function saveResult() {
  if (isClickValid === false) {
    return;
  }
  human.saveWinsToStorage();
  computer.saveWinsToStorage();
}

function startOver() {
  game.resetGame();
  showHomePage();
  retrieveWins();
}
