class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.fighters = [];
    this.rules = [
      { rock: "draw", paper: false, scissors: true, alien: false, lizzard: true },
      { rock: true, paper: "draw", scissors: false, alien: true, lizzard: false },
      { rock: false, paper: true, scissors: "draw", alien: false, lizzard: true },
      { rock: true, paper: false, scissors: true, alien: "draw", lizzard: false },
      { rock: false, paper: true, scissors: false, alien: true, lizzard: "draw" },
    ];
    //rules are in the view of player1, true means player1 wins
  }

  selectGame(level) {
    switch (level) {
      case "classic":
        this.fighters = ["rock", "paper", "scissors"];
        break;
      case "difficult":
        this.fighters = ["rock", "paper", "scissors", "alien", "lizzard"];
        break;
    }
  }

  checkWin() {
    if (this.player1.fighter === "rock") {
      return this.rules[0][this.player2.fighter];
    }
    if (this.player1.fighter === "paper") {
      return this.rules[1][this.player2.fighter];
    }
    if (this.player1.fighter === "scissors") {
      return this.rules[2][this.player2.fighter];
    }
    if (this.player1.fighter === "alien") {
      return this.rules[3][this.player2.fighter];
    }
    if (this.player1.fighter === "lizzard") {
      return this.rules[4][this.player2.fighter];
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
    this.player1.fighter = "";
    this.player1.fighter = "";
    this.player1.wins = 0;
    this.player2.wins = 0;
    this.player1.saveWinsToStorage();
    this.player2.saveWinsToStorage();
  }
}
