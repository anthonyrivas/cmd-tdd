const Character = function( name = '', race = '', cls = '') {
    this.name = name;
    this.race = race;
    this.class = cls;
    this.generateStats();
}

Character.prototype.updateName = function() {

};
Character.prototype.updateRace = function() {

};
Character.prototype.updateClass = function() {

};
Character.prototype.generateStats = function() {
this.hp = this.generateRandomNumber(10, 20);
this.str = this.generateRandomNumber(5, 8);
this.def = this.generateRandomNumber(6, 11);
return this;
};
Character.prototype.increaseHP = function() {

};
Character.prototype.increaseStrength = function(amount = 1) {

};
Character.prototype.increaseDefense = function(amount = 1) {

};
Character.prototype.increaseRandom = function() {

};
Character.prototype.levelUp = function() {

};
Character.prototype.attack = function(target) {

};
Character.prototype.defend = function(target) {

};
Character.prototype.generateRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = Character;