$(document).foundation()

//variables
var intro = document.querySelector("#headTitle");

//Functions
function fadeIn()
{
  TweenMax.to(intro, 2, {opacity: 1});
  TweenMax.to(intro, 2, {top: "20px"});
}

//listeners
window.addEventListener("load", fadeIn, false);
