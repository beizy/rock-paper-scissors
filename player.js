class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.fighter = "";
  }

  savePlayerToStorage() {
    var strPlayer = JSON.stringify(this);
    localStorage.setItem(this.name, strPlayer);
  }

  getWinsFromStorage() {
    var playerObj = JSON.parse(localStorage.getItem(this.name));
    return playerObj.wins;
  }
}
