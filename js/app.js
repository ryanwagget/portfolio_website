$(document).foundation()

//variables
var intro = document.querySelector("#headTitle");
var nav = document.querySelector("#navLinks");
var links = nav.querySelectorAll("a");
var header1 = document.querySelectorAll("#headerVideoSmall");
var vid = document.querySelector("video");
//Functions

function scrollit(evt){
  //console.log(evt.target.id);
  var idNum = evt.target.id;
  console.log("section"+idNum);
  TweenLite.to(window, 1, {scrollTo:{y:"#section"+idNum, offsetY:20}});
}

function fadeIn()
{
  TweenMax.to(intro, 2, {opacity: 1});
  TweenMax.to(intro, 2, {top: "20px"});
}

function closeNav()
{
  if(window.innerWidth < 768)
  {
	   document.getElementById('navLinks').style.display = 'none';
  }
}

/*function enableControls()
{
  header1.controls = false;
  vid.controls = true;
}*/

//listeners
window.addEventListener("load", fadeIn, false);
for(var i=0; i<links.length; i++){
  links[i].addEventListener("click", scrollit, false);
}

document.addEventListener("click", closeNav, false);

//window.addEventListener("load", enableControls, false);
