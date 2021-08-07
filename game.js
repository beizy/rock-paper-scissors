class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player1 = player2;
    this.fighters = [];
  }

  selectGame(level) {
    switch (level) {
      case "classic":
        this.fighters = ["rock", "paper", "scissors"];
        break;
      case "difficult":
        this.fighters = ["rock", "paper", "scissors", "alien", "lizzard"];
    }
  }

  selectFighter(fighter1, fighter2) {
    this.player1.fighter = fighter1;
    this.player2.fighter = fighter2;
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
      return classicRules[0][this.player2.fighter];
    }
    if (this.player1.fighter === "paper") {
      return classicRules[1][this.player2.fighter];
    }
    if (this.player1.fighter === "scissors") {
      return classicRules[2][this.player2.fighter];
    }
    if (this.player1.fighter === "alien") {
      return classicRules[3][this.player2.fighter];
    }
    if (this.player1.fighter === "lizzard") {
      return classicRules[4][this.player2.fighter];
    }
  }

  updateScore(result) {
    if (result) {
      this.player1.wins++;
    } else {
      this.player2.wins++;
    }
  }

  resetGame() {
    this.fighters = [];
    this.player1.fighter = null;
    this.player1.fighter = null;
  }
}
