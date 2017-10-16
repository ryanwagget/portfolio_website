$(document).foundation()

//variables
var tree = document.querySelector("#tree");
var dog = document.querySelector("#dog");
var dogTop;
var screenPos;
//Functions


function colorChange ()
{
  screenPos = window.scrollY;
  dogTop = dog.offsetTop;
    if(dog.scrollTop == 0)
    {
      console.log("yay");
    }

}

//listeners
window.addEventListener("scroll", colorChange, false);
