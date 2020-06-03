const Character = require('./Character');

const Game = function( name = '', race = '', cls = '') {
  this.player = new Character();
  this.enemy = new Character();
  this.statRerolls = 3;
  this.charactersFinalized = false;
  this.battleRound = 1;
}

Character.prototype.start = function() {

};
Character.prototype.createCharacter = function() {

};
Character.prototype.createEnemy = function() {

};
Character.prototype.offerStatReroll = function() {

};
Character.prototype.runBattle = function() {

};