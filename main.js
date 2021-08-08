var openView = document.querySelector(".open-view");
var gameView = document.querySelector(".game-view");
var classicGameBtn = document.querySelector(".classic-btn");
var difficultGameBtn = document.querySelector(".difficult-btn");
var goHomeBtn = document.querySelector(".gohome-btn");
var alienImg = document.getElementById("alien");
var lizzardImg = document.getElementById("lizzard");
var fightersBox = document.querySelector(".fighters-box");
var fightersList = document.querySelectorAll(".fighters-box>img");
var human;
var computer;
var game;
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
  if ((game.mode = "classic")) {
    var result = game.checkWinClassic();
  } else if ((game.mode = "difficult")) {
    var result = game.checkWinDifficult();
  }
  game.updateScore(result);

  console.log(human.wins);
  console.log(computer.wins);
}

function displayResult() {
  humanWins.innerText = human.wins;
  computerWins.innerText = computer.wins;
  fightersArr = Array.from(fightersList);
  console.log("children array is", fightersArr);
  console.log(fightersArr[0]);
  // for (var i= 0; i<childrenArr.length; i++){
  //   if(childrenArr[i].id !== human.fighter && childrenArr[i].id !==computer.fighter){
  //     fightersBox.childNodes[i].classList.add('hidden')
  //   }
  // }
  // if (result !== "draw") {
  //   if (result) {
  //   } else {
  //     this.player2.wins++;
  //   }
  // }
  human.savePlayerToStorage();
  computer.savePlayerToStorage();
}
