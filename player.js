class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.fighter = "";
  }

  saveWinsToStorage() {
    var strWins = JSON.stringify(this.wins);
    localStorage.setItem(this.name, strWins);
  }

  getWinsFromStorage() {
    var retrievedWins = JSON.parse(localStorage.getItem(this.name));
    return parseInt(retrievedWins);
  }
}
