var openView = document.querySelector(".open-view");
var gameView = document.querySelector(".game-view");
var classicGameBtn = document.querySelector(".classic-btn");
var difficultGameBtn = document.querySelector(".difficult-btn");
var goHomeBtn = document.querySelector(".gohome-btn");
var alienImg = document.getElementById("alien");
var lizzardImg = document.getElementById("lizzard");

classicGameBtn.addEventListener("click", showClassicGame);
difficultGameBtn.addEventListener("click", showDifficultGame);
goHomeBtn.addEventListener("click", showHomePage);

function showClassicGame() {
  console.log("show classic game is working");
  openView.classList.add("hidden");
  gameView.classList.remove("hidden");
  alienImg.classList.add("hidden");
  lizzardImg.classList.add("hidden");
}

function showDifficultGame() {
  console.log("show diffcult is working");
  openView.classList.add("hidden");
  gameView.classList.remove("hidden");
  gameView.classList.remove("hidden");
  alienImg.classList.remove("hidden");
  lizzardImg.classList.remove("hidden");
}

function showHomePage() {
  console.log("show home page is working");
  gameView.classList.add("hidden");
  openView.classList.remove("hidden");
}
