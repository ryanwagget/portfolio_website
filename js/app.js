$(document).foundation()

//variables
var intro = document.querySelector("#headTitle");
var nav = document.querySelector("#navLinks");
var links = nav.querySelectorAll("a");
var header1 = document.querySelectorAll("#headerVideoSmall");
var vid = document.querySelector("#videoTag");
var vid1 = document.querySelector(".thumb1");
var vid2 = document.querySelector(".thumb2");
var vid3 = document.querySelector(".thumb3");
var vidTitle = document.querySelector("#videoTitle");
var vidDesc = document.querySelector("#videoDesc");



//Functions
function scrollit(evt){
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
	   document.querySelector('#navLinks').style.display = 'none';
  }
}

function play1()
{
  vid.src="./motion/intro.mp4";
  vid.src="./motion/intro.webm";
  vid.src="./motion/intro.ogv";
  vid.poster="./motion/rw-intro_thumb.png";
  vidTitle.innerHTML = "Personal Intro";
  vidDesc.innerHTML = "This is a video I created in Adobe After Effects as an intro to my personal brand. My whole brand is based around 'thinking outside of the box'. The beginning of the video starts very grey and not very much is occurring. As the video progresses, the animations become more intricate until its eventually revealed that the first portion of the video occurred inside of 'the box'. Once this is revealed, the screen is filled with colour that represents 'creativity'. The video eventually ends off by all of the colour going into my name to represent that I am the one doing the creative thinking.";
}

function play2()
{
  vid.src="./motion/teaser.mp4";
  vid.src="./motion/teaser.webm";
  vid.src="./motion/teaser.ogv";
  vid.poster="./motion/lotr-teaser_thumb.png";
  vidTitle.innerHTML = "Lord of the Rings Teaser Trailer";
  vidDesc.innerHTML = "I created this video using Adobe After Effects. The goal of this video was to be a short teaser trailer to promote a new 'never before seen footage' version of the Lord of the Rings for the movie's 15th anniversary. For this release, the primary target audience would clearly be people who are already fans of the movie. Because of this, I decided to have one shape that is constantly changing between outlines of the main characters. This would be effective because it doesn't give away any content but would appeal to people who are already fans of the movie because they would recognize those character's figures.";
}

function play3()
{
  vid.src="./motion/wagget_ryan_soccer.mp4";
  vid.src="./motion/wagget_ryan_soccer.webm";
  vid.src="./motion/wagget_ryan_soccer.ogv";
  vid.poster="./motion/soccer-ad_thumb.jpg";
  vidTitle.innerHTML = "World Soccer Awards Intro";
  vidDesc.innerHTML = "I created this video using Cinema 4D and Adobe After Effects. The idea was that this is a clip that would be played before a live sporting event. Because of this, I tried to create an 'epic' feel with the camera movements and dark lighting. I also made all of the textures very reflective to mimic a high end environment. This is effective because it shows that the World Soccer Awards is prestigious and illustrates the fact that this is a big event.";
}

//listeners
window.addEventListener("load", fadeIn, false);
for(var i=0; i<links.length; i++){
  links[i].addEventListener("click", scrollit, false);
}

document.addEventListener("click", closeNav, false);

vid1.addEventListener("click", play1, false);
vid2.addEventListener("click", play2, false);
vid3.addEventListener("click", play3, false);
