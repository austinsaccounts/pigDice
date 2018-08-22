var player1 = 0;
var player2 = 0;
var currentScore;
var currentPlayer = 0;
//declaring variables
function rollDie() {
  var x = Math.floor((Math.random() * 6) + 1);
  return x;
}

function scoreMe(currentRoll) {
  for (var i = 0; i < currentRoll.length; i++)
    if (currentRoll[i] !== 1) {
      var rolling = currentRoll[i];
      rolling = parseInt(rolling);
      currentScore += rolling;
    }
  else {
    currentScore = 0;
    console.log("you should force pass action");
    break;
  }
  return currentScore;
}

function Player(name) {
  this.name = name;
  this.currentScore = 0;
  this.score = 0;
}
Player.prototype.pass = function(currentScore) {
  this.currentScore = parseInt(currentScore);
  this.score += this.currentScore;
  console.log(this.name + " " + this.score);
}
//ui below
$(document).ready(function() {
  var currentRoll = [];
  currentScore = 0;
  $("#roll-button").click(function(event) {
    event.preventDefault();
    var die = rollDie();
    var die2 = rollDie();
    die = parseInt(die);
    die2 = parseInt(die2);
    $("#rolled").text(die + " and " + die2);
    currentRoll.push(die, die2);
    console.log(scoreMe([die, die2]));
    //roll button 2 below
  })
  $(".pass-button").click(function(event) {
    event.preventDefault();
    if (currentPlayer === player2) {
      currentPlayer = player1;
    } else
      currentPlayer = player2;
    currentPlayer.pass(currentScore);
    currentScore = 0;
  });

  $("h2#totalScore").append(this.name + ", " + this.score);
  $("#Name").submit(function(event) {
    player1 = new Player($("input#playerName1").val());
    player2 = new Player($("input#playerName2").val());
    event.preventDefault();
  })
})
