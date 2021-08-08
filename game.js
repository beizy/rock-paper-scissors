class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.mode = "";
    this.fighters = [];
  }

  selectGame(level) {
    switch (level) {
      case "classic":
        this.fighters = ["rock", "paper", "scissors"];
        this.mode = "classic";
        break;
      case "difficult":
        this.fighters = ["rock", "paper", "scissors", "alien", "lizzard"];
        this.mode = "difficult";
        break;
    }
  }

  checkWinClassic() {
    //result is in the view of player1, true means player1 wins
    var classicRules = [
      { rock: "draw", paper: false, scissors: true },
      { rock: true, paper: "draw", scissors: false },
      { rock: false, paper: true, scissors: "draw" },
    ];
    if (this.player1.fighter === "rock") {
      return classicRules[0][this.player2.fighter];
    }
    if (this.player1.fighter === "paper") {
      return classicRules[1][this.player2.fighter];
    }
    if (this.player1.fighter === "scissors") {
      return classicRules[2][this.player2.fighter];
    }
  }

  checkWinDifficult() {
    var diffcultRules = [
      { rock: "draw", paper: false, scissors: true, alien: false, lizzard: true },
      { rock: true, paper: "draw", scissors: false, alien: true, lizzard: false },
      { rock: false, paper: true, scissors: "draw", alien: false, lizzard: true },
      { rock: true, paper: false, scissors: true, alien: "draw", lizzard: false },
      { rock: false, paper: true, scissors: false, alien: true, lizzard: "draw" },
    ];
    if (this.player1.fighter === "rock") {
      return diffcultRules[0][this.player2.fighter];
    }
    if (this.player1.fighter === "paper") {
      return diffcultRules[1][this.player2.fighter];
    }
    if (this.player1.fighter === "scissors") {
      return diffcultRules[2][this.player2.fighter];
    }
    if (this.player1.fighter === "alien") {
      return diffcultRules[3][this.player2.fighter];
    }
    if (this.player1.fighter === "lizzard") {
      return diffcultRules[4][this.player2.fighter];
    }
  }

  updateScore(result) {
    switch (result) {
      case true:
        this.player1.wins++;
        break;
      case false:
        this.player2.wins++;
        break;
      default:
        break;
    }
  }

  resetGame() {
    this.player1.fighter = null;
    this.player1.fighter = null;
    this.player1.wins = 0;
    this.player2.wins = 0;
    this.player1.saveWinsToStorage();
    this.player2.saveWinsToStorage();
  }
}
