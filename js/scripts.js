var player1 = 0;
var player2 = 0;
var currentScore;
var currentPlayer = player1;
//declaring variables
function rollDie() {
  var x = Math.floor((Math.random() * 6) + 1);
  return x;
}

function scoreMe(currentRoll) {
  for(var i = 0; i < currentRoll.length; i++)
    if(currentRoll[i] !== 1) {
      var rolling = currentRoll[i];
      rolling = parseInt(rolling);
      currentScore += rolling;
    }
  else {
    currentScore = 0;
    alert('you lose');
    $('#roll-button').addClass('hidden');
    currentPlayer.pass(currentScore);
    break;
  }
  return currentScore;
}

function Player(name, number) {
  this.name = name;
  this.currentScore = 0;
  this.score = 0;
  this.number = number;
}
Player.prototype.pass = function(currentScore) {
  this.currentScore = parseInt(currentScore);
  this.score += this.currentScore;
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
    var rollingDisplay = scoreMe([die, die2]);
    $("#tempPlayer" + currentPlayer.number).html('<p> you rolled a ' + die + " and a  " + die2 + "</p><p> your current rolls total " + rollingDisplay + "</p>");
    //roll button 2 below
  })
  $(".pass-button").click(function(event) {
    event.preventDefault();
    $("#roll-button").removeClass("hidden");
    currentPlayer.pass(currentScore);
    $("#scorePlayer" + currentPlayer.number).text(currentPlayer.score);
    currentScore = 0;
    if(currentPlayer === player2) {
      currentPlayer = player1;
    } else currentPlayer = player2;
    alert(currentPlayer.name + " its your turn");
  })
  $("h2#totalScore").append(this.name + ", " + this.score);
  $("form#starting").submit(function(event) {
    event.preventDefault();
    alert("");
    player1 = new Player($("input#firstPlayer").val(), 1);
    player2 = new Player($("input#secondPlayer").val(), 2);
    currentPlayer = player1;
    $("#playerName1").append(player1.name);
    $("#playerName2").append(player2.name);
    console.log(player1);
    $("div#startUp").addClass("hidden");
  })
})