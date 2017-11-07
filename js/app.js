$(document).foundation()

//variables
var intro = document.querySelector("#headTitle");
var color = document.querySelector("#tree");
var screenHeight = window.innerHeight; //height of browser window
var treeOpac = document.querySelector("#tree").style.opacity; //opacity of tree image
var nav = document.querySelector("#mainNav");

//Functions

/*if (window.scrollY + 10) //when distance between origin and screen position increases, tree opacity decreases
{
  console.log("working");
  //treeOpac - 1;
  TweenMax.to(color, 2, {opacity: 0});
}*/

function fadeIn()
{
  TweenMax.to(intro, 2, {opacity: 1});
  TweenMax.to(intro, 2, {top: "20px"});
}

function colorChange()
{
  console.log("change");
}

//listeners
window.addEventListener("scroll", colorChange, false);
window.addEventListener("load", fadeIn, false);
