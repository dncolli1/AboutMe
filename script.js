//This is my onmousdover event. Mouse over my name and the text color will switch from black to green.
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("demo").style.color = "green";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}
//This is my onclick event. Click on the click me button and Go pack Go! should pop up. For some reason, it replaces my name in the header.
function myFunction() {
  document.getElementById("demo").innerHTML = "Go Pack Go!";
}