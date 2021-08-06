var openView = document.querySelector(".open-view");
var classicView = document.querySelector(".classic-view");
var difficultView = document.querySelector(".difficult-view");
var classicGameBtn = document.querySelector(".classic-btn");
var difficultGameBtn = document.querySelector(".difficult-btn");

classicGameBtn.addEventListener("click", showClassicGame);
difficultGameBtn.addEventListener("click", showDifficultGame);

function showClassicGame() {
  console.log("im working");
  openView.classList.add("hidden");
  classicView.classList.remove("hidden");
}
alert("im working");
