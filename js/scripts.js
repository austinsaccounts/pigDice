
var player1=0;
var player2=0;
var playerName1;
var playerName2;
var rollScore=0;
var currentScore;
var activePlayer=0;


function rollDie() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}

function swap() {
  if (activePlayer===1) {
    activePlayer=2;
  }
  else {
    activeplayer=1;
  }
  return activePlayer;
};

function scoreMe(currentRoll){
  for (var i = 0; i<currentRoll.length; i++)
  if (currentRoll[i] !== 1){
    currentScore += currentRoll[i];
  }
  else {
    currentScore = 0;
    return currentScore;
    console.log("you should force pass action");
    break;
  }
  return currentScore;
}

function Player(name) {
  this.name = name;
  var score;
}

Player.prototype.score = function() {
  return this.name + ", " + this.score ;
}




$(document).ready(function() {
var rollingScore=0;
// roll 1 button bellow
  $("#roll-button").click(function(event) {
    event.preventDefault();
    var die = rollDie();
    var die2 = rollDie();
    var currentRoll=[];
    currentRoll.push(die,die2);
    console.log(parseInt(scoreMe(currentRoll)));

//roll button 2 below
})
$(".pass-button").click(function(event) {
event.preventDefault();
activePlayer = swap(activePlayer);
console.log(activePlayer);
});




$("h2#totalScore").append(this.name + ", " + this.score);
$("#Name").submit(function(event) {
  playerName1 = new Player($("input#playerName1").val());
  playerName2 = new Player($("input#playerName2").val());
  event.preventDefault();
})
})
