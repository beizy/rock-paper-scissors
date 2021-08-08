var openView = document.querySelector(".open-view");
var gameView = document.querySelector(".game-view");
var resultView = document.querySelector(".result-view");
var classicGameBtn = document.querySelector(".classic-btn");
var difficultGameBtn = document.querySelector(".difficult-btn");
var goHomeBtn = document.querySelector(".gohome-btn");
var alienImg = document.getElementById("alien");
var lizzardImg = document.getElementById("lizzard");
var fightersBox = document.querySelector(".fighters-box");
var resultBox = document.querySelector(".result-box");
var resultAlert = document.querySelector(".result-view>h2");
// var fightersList = document.querySelectorAll(".fighters-box>img");
var human;
var computer;
var game;
var result;
var humanWins = document.getElementById("human-wins");
var computerWins = document.getElementById("computer-wins");

window.addEventListener("load", retrieveWins);
classicGameBtn.addEventListener("click", showClassicGame);
difficultGameBtn.addEventListener("click", showDifficultGame);
goHomeBtn.addEventListener("click", showHomePage);
fightersBox.addEventListener("click", function (event) {
  pickFighter(event);
  startGame();
  displayResult();
  setTimeout(backToGame, 1500);
});

function retrieveWins() {
  if (localStorage.getItem("Human") && localStorage.getItem("Computer")) {
    human = JSON.parse(localStorage.getItem("Human"));
    computer = JSON.parse(localStorage.getItem("Computer"));
    humanWins.innerText = human.wins;
    computerWins.innerText = computer.wins;
  } else {
    human = new Player("Human");
    computer = new Player("Computer");
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
  event.preventDefault();
  human.fighter = event.target.id;
  var randomIndex = Math.floor(Math.random() * game.fighters.length);
  computer.fighter = game.fighters[randomIndex];
  console.log(human.fighter);
  console.log(computer.fighter);
}

function startGame() {
  if (game.mode === "classic") {
    result = game.checkWinClassic();
    console.log("classic result", result);
  } else if (game.mode === "difficult") {
    result = game.checkWinDifficult();
    console.log("difficult result", result);
  }
  game.updateScore(result);

  console.log(human.wins);
  console.log(computer.wins);
}

function displayResult() {
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

  // resultView.setTimeout(backToGame(), 3000);
}

function backToGame() {
  resultAlert.innerText = "";
  resultBox.innerHTML = "";
  gameView.classList.remove("hidden");
  resultView.classList.add("hidden");
}

// }
// human.savePlayerToStorage();
// computer.savePlayerToStorage();
