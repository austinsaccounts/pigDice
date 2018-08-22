function rollDie() {
    var x = Math.floor((Math.random() * 6) + 1);
    console.log(x);
    return x;
}



$(document).ready(function() {


// roll 1 button bellow
  $("#roll-button").click(function(event) {
event.preventDefault();
  $("#rolled").text(rollDie());
  })

//roll button 2 below
$("#pass-button").click(function(event) {
event.preventDefault();
  alert("button-pass clicked")
})
})
