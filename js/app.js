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
var study = document.querySelector(".caseStudy");

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
     //console.log("rtfyguhifcgyuhi");
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
var vid6 = document.querySelector(".thumb6");


function play1()
{
  vid.src="./motion/intro.mp4";
  vid.src="./motion/intro.webm";
  vid.src="./motion/intro.ogv";
  vid.poster="./motion/rw-intro_poster.png";
  vidTitle.innerHTML = "Personal Intro";
  vidDesc.innerHTML = "This is a video I created in Adobe After Effects as an intro to my personal brand. My whole brand is based around 'thinking outside of the box'. The beginning of the video starts very grey and not very much is occurring. As the video progresses, the animations become more intricate until its eventually revealed that the first portion of the video occurred inside of 'the box'. Once this is revealed, the screen is filled with colour that represents 'creativity'. The video eventually ends off by all of the colour going into my name to represent that I'm the one doing the creative thinking.";
  document.querySelector('.caseStudy').style.display = 'none';
}

function play2()
{
  vid.src="./motion/melvin-comic.mp4";
  vid.src="./motion/melvin-comic.webm";
  vid.src="./motion/melvin-comic.ogv";
  vid.poster="./motion/mg-video-thumbnail.jpg";
  vidTitle.innerHTML = "The Amazing Adventures of Melvin Gordon";
  vidDesc.innerHTML = "This is a video I created in Adobe After Effects as a promotional video for Melvin Gordon. Melvin Gordon is an NFL running back for the Los Angeles Chargers and one of his nicknames is 'Flash Gordon' because he's such a fast runner. Because of this and the fact that he personally enjoys comics and video games, I decided to put him inside of a comic book to show off his football highlights. This is very effective because it shows that he can run so fast, hit so hard, and literally fly over the other team so well that he must be a superhero instead of an ordinary player. I created all of the assets within Adobe Photoshop and Adobe Illustrator.";
  document.querySelector('.caseStudy').style.display = 'inline';
  study.href = "study1.html";
}

function play3()
{
  vid.src="./motion/wagget_ryan_soccer.mp4";
  vid.src="./motion/wagget_ryan_soccer.webm";
  vid.src="./motion/wagget_ryan_soccer.ogv";
  vid.poster="./motion/soccer-ad_poster.jpg";
  vidTitle.innerHTML = "World Soccer Awards Intro";
  vidDesc.innerHTML = "I created this video using Cinema 4D and Adobe After Effects. The idea was that this is a clip that would be played before a live sporting event. Because of this, I tried to create an 'epic' feel with the camera movements and dark lighting. I also made all of the textures very reflective to mimic a high end environment. This is effective because it shows that the World Soccer Awards is prestigious and illustrates the fact that this is a big event.";
  document.querySelector('.caseStudy').style.display = 'none';
}

function play4()
{
  vid.src="./motion/about-me.mp4";
  vid.src="./motion/about-me.webm";
  vid.src="./motion/about-me.ogv";
  vid.poster="./motion/about-me_poster.jpg";
  vidTitle.innerHTML = "Today's Recipe - Things About Me";
  vidDesc.innerHTML = "I was tasked to create a typography video about myself but instead of making a video of text on a colored background, I decided to film my own content. This was really fun because I got to work with lighting, plan out the shots to tailor to the special effects, set up scenes, and created my own props. Everything in the video represents myself in one way or another. The language, music, and animations create a light hearted tone to show my personality. Each 'ingredient' also shows things that I personally like such as the color green, music, and taking pictures. I created this video using Adobe After Effects and Adobe Premiere Pro.";
  document.querySelector('.caseStudy').style.display = 'inline';
  study.href = "study2.html";
}

function play5()
{
  vid.src="./motion/bumper.mp4";
  vid.src="./motion/bumper.webm";
  vid.src="./motion/bumper.ogv";
  vid.poster="./motion/bumper-poster.jpg";
  vidTitle.innerHTML = "Team Canada - Meaghan Mikkelson";
  vidDesc.innerHTML = "This is a short bumper I created for a school assignment that was all about promoting a Canadian olympic athlete, their sport, and the logo I created at the end. To fit all of this inside of a 7 second video, I showed Meaghan Mikkelson performing a slap shot in slow motion while advertising her name. I also added multiple HUD elements to add to the high tech feel of the video. The HUD elements promotes the idea that at the level that Mikkelson is at, there are so many tiny details and factors that go into her being a champion in the realm of Hockey. The video demonstrates that Mikkelson has the 'slap shot' down to a science. I created this video using Adobe After Effects and Adobe Photoshop.";
  document.querySelector('.caseStudy').style.display = 'none';
}

function play6()
{
  vid.src="./motion/net-zero.mp4";
  vid.src="./motion/net-zero.webm";
  vid.src="./motion/net-zero.ogv";
  vid.poster="./motion/net-zero_poster.jpg";
  vidTitle.innerHTML = "What is Net Zero Living?";
  vidDesc.innerHTML = "This is one of the videos I created while working at Sifton Properties as a Motion Design Marketing Intern. I had the oppurtunity to create promotional videos as well as explainer videos for Ontario's first net zero community; West 5. The challenge of this video was to create content that was interesting as well as easy to understand for audiences of all ages. I also had to stay within the paramaters of these pentagon shapes that are apparent throughout the brand while still delivering engaging and meaningful animations. I also created West 5's and Sifton Properties' logo reveals at the beginning and ending of the video. This video was made using Adobe After Effects and Adobe Illustrator.";
  document.querySelector('.caseStudy').style.display = 'none';
}

vid1.addEventListener("click", play1, false);
vid2.addEventListener("click", play2, false);
vid3.addEventListener("click", play3, false);
vid4.addEventListener("click", play4, false);
vid5.addEventListener("click", play5, false);
vid6.addEventListener("click", play6, false);










//////////////////////////Graphics//////////////////////////
var portfolioPiece = document.querySelector("#content");
var lightbox = document.querySelector(".lightbox");
var close = document.querySelector(".close-lightbox");
var img = document.querySelector(".lightbox-img");
var title = document.querySelector(".lightbox-title");
var desc = document.querySelector(".lightbox-desc");
var more = document.querySelector(".lightbox-seeMore");

function openLightbox()
{
  //console.log("open");
  document.querySelector('.lightbox').style.display = 'inline';
}

function closeLightbox()
{
  console.log("close");
  document.querySelector('.lightbox').style.display = 'none';
}

portfolioPiece.addEventListener("click", openLightbox, false);
close.addEventListener("click", closeLightbox, false);




var piece1 = document.querySelector("#piece1");
var piece2 = document.querySelector("#piece2");
var piece3 = document.querySelector("#piece3");
var piece4 = document.querySelector("#piece4");
var piece5 = document.querySelector("#piece5");
var piece6 = document.querySelector("#piece6");
var piece7 = document.querySelector("#piece7");
var piece8 = document.querySelector("#piece8");
var piece9 = document.querySelector("#piece9");

function open1()
{
  title.innerHTML = "Surfs Up Website Design";
  desc.innerHTML = "This is a wireframe I decided to make in my free time while I was experimenting with gradient maps. This is a website for a fictional surfing company called Surfs Up. I created this in photoshop and used a foundation grid layout so that if it was developed into a website, it could easily be responsive.";
  img.src = "./graphic/surfs-up_wireframe.jpg";
  more.href = "https://tinyurl.com/y73g7qbh";
}

function open2()
{
  title.innerHTML = "Team Canada Logo";
  desc.innerHTML = "This is a fictional logo I created for Canada's Winter Olympic Team. This logo is comprised of a bunch of different triangles that are many different sizes and shades of red. I decided to use triangles because they are the strongest geometrical shape so it's effective to represent Canada, the land of the strong and free. All of the triangles are different sizes and shades of red to represent the diversity that Canada has become so known for. In the whole picture, all of the triangles form the Canadian flag to symbolize all of the diverse, strong athletes coming together for one cause and one team.";
  img.src = "./graphic/olympic_lightbox.jpg";
  more.href = "https://www.behance.net/gallery/64291239/Team-Canada-Logo";
}

function open3()
{
  title.innerHTML = "Melvin Gordon T-Shirt";
  desc.innerHTML = "This is a shirt for an NFL running back named Melvin Gordon. The lightning bolt comes from his logo but in this design, it is highly stylized and textured. I did this because I wanted to create a hardcore, epic feel that a football game or player would also deliver. I also did not want a t-shirt that simply had a square design printed onto the shirt. To overcome this obstacle, I made the the edge of the letters slightly fade to black as if the lightning bolt was illuminating it. Because of this, it makes it looks like the logo is fading into the black colour of the shirt.";
  img.src = "./graphic/mg-shirt.jpg";
  more.href = "https://tinyurl.com/ycy53rat";
}

function open4()
{
  title.innerHTML = "Continue Someone's Story Poster";
  desc.innerHTML = "This is a poster I created for a campaign to promote organ and tissue donation. The slogan of the campaign was Continue Someone's Story and it focused on coming together as a community to help each other out. In the poster, someone is writing Continue Someone's Story in blue but they run out of paint. I also created someone finishing off the painted text in purple as these are the two brand's colours. This is an effective poster because the person helping someone finish painting the slogan is symbolic of an organ donor helping someone continue their life after they donate an organ to help save them.";
  img.src = "./graphic/organ_lightbox.jpg";
  more.href = "https://www.behance.net/gallery/64291175/Continue-Someones-Story-Poster";
}

function open5()
{
  title.innerHTML = "Flashback Website Design";
  desc.innerHTML = "I was tasked to create a few wireframes to show the idea of an entertainment app. On the app, the user is immediately able to navigate through either movies, television, or music or alternatively can filter their content by the era. Each piece of content also has their own pages where users can see ratings, comments, and reviews.";
  img.src = "./graphic/flashback-lightbox.jpg";
  more.href = "https://tinyurl.com/y74skywr";
}

function open6()
{
  title.innerHTML = "Pearl Jam Album Cover";
  desc.innerHTML = "This is a fictional album cover for one of my favourite bands; Pearl Jam. Pearl Jam released an album called Lightning Bolt and also created cover art for every song that represents what the song is about. The unique thing about this is that they used similar shapes and colours for each cover. Because of this, I decided to create an album cover that included elements from each song cover that they released.";
  img.src = "./graphic/pearl-jam_lightbox.jpg";
  more.href = "https://tinyurl.com/ya5nl3n2";
}

function open7()
{
  title.innerHTML = "Ice Cube Tour App Design";
  desc.innerHTML = "These are a collection of wireframes I created for a fictional Ice Cube tour called The Nothingz Cooler Tour. The idea behind the tour was that this would be Ice Cube's final tour and goodbye to the music industry. Since his name is Ice Cube, I designed the app so that it looked very cold. I also implemented this into the logo while also making it look tough and hard, similar to the personality of Ice Cube that everyone knows about.";
  img.src = "./graphic/cube_lightbox.jpg";
  more.href = "https://tinyurl.com/y73g7qbh";
}

function open8()
{
  title.innerHTML = "Hub-Tones Beer Label";
  desc.innerHTML = "For this project, I had to create a beer bottle label from the design of a 1992 jazz album cover. Since the most memorable aspect of the cover is the bright red trumpet, I decided to replicate this iconic feature by cutting a trumpet shape through the label itself to show the natural colour of the Irish Red Ale.";
  img.src = "./graphic/hub-tones_beer_bottle.jpg";
  more.href = "https://tinyurl.com/y8qsvegs";
}

function open9()
{
  title.innerHTML = "Cultivate Dance Logo";
  desc.innerHTML = "This is a logo I created for a client's dance studio while doing freelance design. The goal for this was to connect cultivate and dance within the symbol. In the end, I created a logo that is both a flower as well as someone dancing. I also made sure to connect the symbol and the text in a way that did not seem forced.";
  img.src = "./graphic/cultivate-lightbox.jpg";
  more.href = "https://www.behance.net/gallery/62367979/Cultivate-Dance-Logo";
}

piece1.addEventListener("click", open1, false);
piece2.addEventListener("click", open2, false);
piece3.addEventListener("click", open3, false);
piece4.addEventListener("click", open4, false);
piece5.addEventListener("click", open5, false);
piece6.addEventListener("click", open6, false);
piece7.addEventListener("click", open7, false);
piece8.addEventListener("click", open8, false);
piece9.addEventListener("click", open9, false);
