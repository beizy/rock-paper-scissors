var openView = document.querySelector(".open-view");
var gameView = document.querySelector(".game-view");
var classicGameBtn = document.querySelector(".classic-btn");
var difficultGameBtn = document.querySelector(".difficult-btn");
var goHomeBtn = document.querySelector(".gohome-btn");
var alienImg = document.getElementById("alien");
var lizzardImg = document.getElementById("lizzard");
var fightersBox = document.querySelector(".fighters-box");
var human = new Player("Human");
var computer = new Player("Computer");
var game = new Game(human, computer);

classicGameBtn.addEventListener("click", showClassicGame);
difficultGameBtn.addEventListener("click", showDifficultGame);
goHomeBtn.addEventListener("click", showHomePage);
fightersBox.addEventListener("click", function (event) {
  pickFighter(event);
  startGame();
  displayResult();
});

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
  human.fighter = event.target.id;
  console.log("💎 ~ pickFighter ~ human.fighter", human.fighter);
  var randomIndex = Math.floor(Math.random() * game.fighters.length);
  computer.fighter = game.fighters[randomIndex];
  console.log("💎 ~ pickFighter ~ computer.fighter", computer.fighter);
  // computer.fighter =
}
