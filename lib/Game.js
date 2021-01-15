const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [
    this.enemies(new Enemy("goblin", "sword")),
    this.enemies(new Enemy("orc", "baseball bat")),
    this.enemies(new Enemy("skeleton", "axe")),
    inquirer
      .prompt({
        type: "text",
        name: "name",
        message: "What is your name?",
      })
      // destructure name from the prompt object
      .then(({ name }) => {
        this.player = new Player(name);

        // test the object creation
        console.log(this.currentEnemy, this.player);
      }),
  ];
  this.currentEnemy;
  this.player;
}
Game.prototype.initializeGame = function () {
  this.currentEnemy = this.enemies[0];
};

module.exports = Game;
