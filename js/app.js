$(document).foundation()

//variables
var intro = document.querySelector("#headTitle");
var nav = document.querySelector("#navLinks");
var links = nav.querySelectorAll("a");
var header1 = document.querySelectorAll("#headerVideoSmall");
var vidTitle = document.querySelector("#videoTitle");
var vidDesc = document.querySelector("#videoDesc");
var submit = document.querySelector(".submit");
var hamMenu = document.querySelector(".menu-icon");


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
     var visible = "yes";
  }
}

function openNav()
{
  if(visible = "yes")
  {
	   document.querySelector('#navLinks').style.display = 'inline';
     console.log("rtfyguhifcgyuhi");
  }
}

function thankYou()
{
  alert("Your message was sent successfully!");
}

//listeners
window.addEventListener("load", fadeIn, false);
for(var i=0; i<links.length; i++){
  links[i].addEventListener("click", scrollit, false);
}

document.addEventListener("click", closeNav, false);
hamMenu.addEventListener("click", openNav, false);

submit.addEventListener("click", thankYou, false);










//////////////////////////Videos//////////////////////////
var vid = document.querySelector("#videoTag");
var vid1 = document.querySelector(".thumb1");
var vid2 = document.querySelector(".thumb2");
var vid3 = document.querySelector(".thumb3");
var vid4 = document.querySelector(".thumb4");
var vid5 = document.querySelector(".thumb5");


function play1()
{
  vid.src="./motion/intro.mp4";
  vid.src="./motion/intro.webm";
  vid.src="./motion/intro.ogv";
  vid.poster="./motion/rw-intro_poster.png";
  vidTitle.innerHTML = "Personal Intro";
  vidDesc.innerHTML = "This is a video I created in Adobe After Effects as an intro to my personal brand. My whole brand is based around 'thinking outside of the box'. The beginning of the video starts very grey and not very much is occurring. As the video progresses, the animations become more intricate until its eventually revealed that the first portion of the video occurred inside of 'the box'. Once this is revealed, the screen is filled with colour that represents 'creativity'. The video eventually ends off by all of the colour going into my name to represent that I'm the one doing the creative thinking.";
}

function play2()
{
  vid.src="./motion/melvin-comic.mp4";
  vid.src="./motion/melvin-comic.webm";
  vid.src="./motion/melvin-comic.ogv";
  vid.poster="./motion/mg-video-thumbnail.jpg";
  vidTitle.innerHTML = "The Amazing Adventures of Melvin Gordon";
  vidDesc.innerHTML = "This is a video I created in Adobe After Effects as a promotional video for Melvin Gordon. Melvin Gordon is an NFL running back for the Los Angeles Chargers and one of his nicknames is 'Flash Gordon' because he's such a fast runner. Because of this and the fact that he personally enjoys comics and video games, I decided to put him inside of a comic book to show off his football highlights. This is very effective because it shows that he can run so fast, hit so hard, and literally fly over the other team so well that he must be a superhero instead of an ordinary player. I created all of the assets within Adobe Photoshop and Adobe Illustrator.";
}

function play3()
{
  vid.src="./motion/wagget_ryan_soccer.mp4";
  vid.src="./motion/wagget_ryan_soccer.webm";
  vid.src="./motion/wagget_ryan_soccer.ogv";
  vid.poster="./motion/soccer-ad_poster.jpg";
  vidTitle.innerHTML = "World Soccer Awards Intro";
  vidDesc.innerHTML = "I created this video using Cinema 4D and Adobe After Effects. The idea was that this is a clip that would be played before a live sporting event. Because of this, I tried to create an 'epic' feel with the camera movements and dark lighting. I also made all of the textures very reflective to mimic a high end environment. This is effective because it shows that the World Soccer Awards is prestigious and illustrates the fact that this is a big event.";
}

function play4()
{
  vid.src="./motion/about-me.mp4";
  vid.src="./motion/about-me.webm";
  vid.src="./motion/about-me.ogv";
  vid.poster="./motion/about-me_poster.jpg";
  vidTitle.innerHTML = "Today's Recipe - Things About Me";
  vidDesc.innerHTML = "I was tasked to create a typography video about myself but instead of making a video of text on a colored background, I decided to film my own content. This was really fun because I got to work with lighting, plan out the shots to tailor to the special effects, set up scenes, and created my own props. Everything in the video represents myself in one way or another. The language, music, and animations create a light hearted tone to show my personality. Each 'ingredient' also shows things that I personally like such as the color green, music, and taking pictures. I created this video using Adobe After Effects and Adobe Premiere Pro.";
}

vid1.addEventListener("click", play1, false);
vid2.addEventListener("click", play2, false);
vid3.addEventListener("click", play3, false);
vid4.addEventListener("click", play4, false);
