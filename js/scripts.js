
var player1=0;
var player2=0;
var playerName1;
var playerName2;
var rollScore=0;
var currentScore;
var currentPlayer=0;


function rollDie() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}

function scoreMe(currentRoll){
  for (var i = 0; i<currentRoll.length; i++)
  if (currentRoll[i] !== 1){
    currentScore += currentRoll[i];
  }
  else {
    currentScore = 0;
    console.log("you should force pass action");
    return parseInt(currentScore);
    break;
  }
  return parseInt(currentScore);
}

function Player(name) {
  this.name = name;
  this.currentScore = 0;
  this.score= 0;
}

Player.prototype.pass = function(currentScore) {
this.currentScore = parseInt(currentScore);
this.score += this.currentScore;
  console.log(this.name + " " + this.score );
}




$(document).ready(function() {
var rollingScore=0;
// roll 1 button bellow
  $("#roll-button").click(function(event) {
    event.preventDefault();
    var die = rollDie();
    var die2 = rollDie();
    die = parseInt(die);
    die2 = parseInt(die2);
    var currentRoll=[];
    currentRoll.push(die,die2);
    console.log(parseInt(scoreMe(currentRoll)));

//roll button 2 below
})
$(".pass-button").click(function(event) {
event.preventDefault();

if (currentPlayer === playerName2) {
  currentPlayer=playerName1;
} else
  currentPlayer = playerName2;

currentPlayer.pass(currentScore);
currentScore=0;

});




$("h2#totalScore").append(this.name + ", " + this.score);
$("#Name").submit(function(event) {
  playerName1 = new Player($("input#playerName1").val());
  playerName2 = new Player($("input#playerName2").val());
  event.preventDefault();
})
})
