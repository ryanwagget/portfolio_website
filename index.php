<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once("admin/scripts/config.php");
if(isset($_POST['submit']))
{
  //echo "works";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $color = $_POST['favColor'];
  $message = $_POST['comments'];

  if($color === "")
  {
    $sendMail = submitMessage($name, $email, $message);
  }
}

?>


<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ryan Wagget | Design Portfolio</title>
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
    <script src="js/minified/TweenMax.min.js"></script>
    <script src="js/ScrollToPlugin.min.js"></script>
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
    <script src='js/scrollme-master/jquery.scrollme.js'></script>
    <link rel='stylesheet' href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!--<link rel="apple-touch-icon" sizes="57x57" href="favicon.ico/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="favicon.ico/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="favicon.ico/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="favicon.ico/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="favicon.ico/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="favicon.ico/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="favicon.ico/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="favicon.ico/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="favicon.ico/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="favicon.ico/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico/favicon-16x16.png">
  <link rel="manifest" href="favicon.ico/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="favicon.ico/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">-->

  </head>
  <body>

<!--Header-->
    <h1 class="hide">Ryan Wagget's Portfolio</h1>
    <header id="section1">
      <h2 id="headTitle">Hi, my name is Ryan Wagget and I'm a professional Graphic / Motion Designer!</h2>
        <video id="headerVideoSmall" autoplay>
          <source src="video/s-header-vid.mp4" type="video/mp4"/>
          <source src="video/s-header-vid.ogv" type="video/ogv"/>
          <source src="video/s-header-vid.webm" type="video/webm"/>
          Your browser does not support this video.
        </video>
        <video id="headerVideoLarge" autoplay>
          <source src="video/l-header-vid.mp4" type="video/mp4"/>
          <source src="video/l-header-vid.ogv" type="video/ogv"/>
          <source src="video/l-header-vid.webm" type="video/webm"/>
          Your browser does not support this video.
        </video>
    </header>


<!--Navigation-->
<div data-sticky-container>
    <nav data-sticky data-options="stickyOn: small" data-margin-top:"0" data-top-anchor="section1:bottom" class="row sticky" id="mainNav">
    <h2 class="hide">Main Navigation</h2>
      <div>
        <img class="small-6 medium-3 large-3 columns" id="logo" src="images/logo.svg" alt="Ryan Wagget logo">
        <div id="burgerMenu" data-responsive-toggle="navLinks" data-hide-for="medium">
            <button class="menu-icon small-3 small-offset-3 columns" type="button" data-toggle></button>
        </div>
        <ul id="navLinks" class="small-12 medium-9 large-9 columns" data-animate="hinge-in-from-top hinge-out-from-top" data-close-on-click="true">
          <li><a href="#header" id="1">Top</a></li>
          <li><a href="#about" id="2">About</a></li>
          <li><a href="#portfolio" id="3">Portfolio</a></li>
          <li><a href="#contact" id="4">Contact</a></li>
        </ul>
      </div>
    </nav>
</div>


<!--About-->
    <div id="whitespace"></div>
    <section id="section2">
    <h2>Who I Am</h2>
      <div class="scrollme row">
        <div id="dogPics" class="small-12 medium-6 large-6 columns">
          <div class="row">
            <img id="dogGrey" class="animateme small-12 medium-6 large-6 columns" data-when="enter" data-from="0" data-to="0.8" data-opacity="0" data-interchange="[images/s-dogGrey.jpg, small], [images/l-dogGrey.jpg, medium],[images/l-dogGrey.jpg, large]" alt="Bear the Bernedoodle">
          </div>
          <div class="row">
            <img id="dog" class="columns" data-interchange="[images/s-dog.jpg, small], [images/l-dog.jpg, medium],[images/l-dog.jpg, large]" alt="Bear the Bernedoodle">
          </div>
        </div>
        <div class="small-12 medium-6 large-6 columns">
          <h3>Hi, I'm Ryan!</h3>
          <p>I’m a professional Graphic and Motion designer based in London, Ontario. I love doing all things creative! Whether it’s graphic design, motion design, creating a strong brand identity, constructing 3D models, taking pictures, or designing a website, I’m happy to do it. I’m a highly driven individual who loves a good challenge and enjoys thinking of effective “outside of the box” solutions. I’m also really into travelling, doing new things, and am a huge dog person! The picture to the left is my dog, not me. Thanks for visiting my portfolio!</p>
        </div>
      </div>
      <div class="row">
        <a id="resume" href="includes/resume.pdf" download class="small-6 small-offset-3 medium-4 medium-offset-7 large-4 large-offset-7 columns">Resume</a>
      </div>
    </section>


<!--Portfolio-->
    <section id="section3">
    <h2 class="hide">Portfolio</h2>
    <h2>Graphic Design</h2>

        <div class="row">
          <div class="small-12 medium-12 large-12 columns lightbox">
            <i class="fa fa-times fa-2x close-lightbox"></i>
            <div class="">
              <img src="images/l-placeholder.jpg" alt="Placeholder Text" class="lightbox-img">
              <h3 class="lightbox-title">What This Is</h3>
              <p class="lightbox-desc">Description of work, Description of work, consectetur adipiscing elit. Nam tempor dignissim felis, ac tincidunt enim pulvinar euismod. Phasellus vitae varius purus, et hendrerit tortor. Mauris laoreet lorem eu varius tincidunt. Proin ex urna, venenatis vitae lacus nec, mattis vulputate arcu. Duis in sem pellentesque, fermentum libero nec, tempor velit. Aliquam sollicitudin, arcu ultrices volutpat dapibus, lorem nibh dapibus arcu, sit amet euismod nulla massa vel turpis.Description of work, consectetur adipiscing elit. Nam tempor dignissim felis, ac tincidunt enim pulvinar euismod. Phasellus vitae varius purus, et hendrerit tortor. Mauris laoreet lorem eu varius tincidunt. Proin ex urna, venenatis vitae lacus nec, mattis vulputate arcu. Duis in sem pellentesque, fermentum libero nec, tempor velit. Aliquam sollicitudin, arcu ultrices volutpat dapibus, lorem nibh dapibus arcu, sit amet euismod nulla massa vel turpis.Description of work, consectetur adipiscing elit. Nam tempor dignissim felis, ac tincidunt enim pulvinar euismod. Phasellus vitae varius purus, et hendrerit tortor. Mauris laoreet lorem eu varius tincidunt. Proin ex urna, venenatis vitae lacus nec, mattis vulputate arcu. Duis in sem pellentesque, fermentum libero nec, tempor velit. Aliquam sollicitudin, arcu ultrices volutpat dapibus, lorem nibh dapibus arcu, sit amet euismod nulla massa vel turpis.consectetur adipiscing elit. Nam tempor dignissim felis, ac tincidunt enim pulvinar euismod. Phasellus vitae varius purus, et hendrerit tortor. Mauris laoreet lorem eu varius tincidunt. Proin ex urna, venenatis vitae lacus nec, mattis vulputate arcu. Duis in sem pellentesque, fermentum libero nec, tempor velit. Aliquam sollicitudin, arcu ultrices volutpat dapibus, lorem nibh dapibus arcu, sit amet euismod nulla massa vel turpis.</p>
            </div>
          </div>

        </div>
        <div id="content" class="row">
          <!-- <div id="piece1" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece2" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece3" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece4" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece5" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece6" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece7" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece8" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div>
          <div id="piece9" class="small-12 medium-4 large-4 columns green portfolioPiece">
            <h4>Title of Piece</h4>
          </div> -->
      </div>

      <section id="videoSection">
        <div class="row">
          <div class="small-12 medium-8 medium-offset-2 large-8 large-offset-2 columns">
            <h2>Motion Design</h2>
            <p>Below you can find all of my best motion design work to date! All of the included videos have been created using programs such as Adobe After Effects, Premiere Pro, and Cinema 4D!</p>
          </div>
        </div>
        <div id="videoPlayer" class="row">
          <video id="videoTag" class="small-12 medium-8 medium-offset-2 large-8 large-offset-2 columns" poster="images/intro-thumbnail.png" controls>
            <source src="motion/intro.mp4" type="video/mp4"/>
            <source src="motion/intro.ogv" type="video/ogv"/>
            <source src="motion/intro.webm" type="video/webm"/>
            Your browser does not support this video.
          </video>
        </div>


      </section>
    </section>

    <div class="row">
      <div class="small-12 medium-10 medium-offset-1 large-10 large-offset-1 columns">
        <h3 id="videoTitle">Personal Intro</h3>
        <p id="videoDesc">This is a video I created in Adobe After Effects as an intro to my personal brand. My whole brand is based around "thinking outside of the box". The beginning of the video starts very grey and not very much is occurring. As the video progresses, the animations become more intricate until its eventually revealed that the first portion of the video occurred inside of "the box". Once this is revealed, the screen is filled with colour that represents "creativity". The video eventually ends off by all of the colour going into my name to represent that I am the one doing the creative thinking.</div>
    </div>

    <div id="vidThumbnails" class="row">
      <div class="small-6 small-offset-3 medium-3  medium-offset-0 large-3 columns thumb1 thumbs">
        <img src="motion/rw-intro_thumb.png" alt="Personal intro video thumbnail">
      </div>
      <div class="small-6  small-offset-3 medium-3 medium-pull-0 large-3 columns thumb2 thumbs">
        <img src="motion/mg-thumb.jpg" alt="The Amazing Adventures of Melvin Gordon video thumbnail">
      </div>
      <div class="small-6 small-offset-3 medium-3 medium-offset-0  large-3 columns thumb3 thumbs">
        <img src="motion/soccer-ad_thumb.jpg" alt="World Soccer Awards ad video thumbnail">
      </div>
      <div class="small-6 small-pull-3 medium-3 medium-pull-0 medium-offset-0 large-3 large-pull-0 columns thumb4 thumbs">
        <img src="motion/space-animation_thumb.png" alt="Galaga video thumbnail">
      </div>
      <!--<div class="small-8 small-pull-2 medium-3 medium-pull-0 large-3 columns thumbs"></div>-->
    </div>


<!--Contact-->
    <div id="envelope" class="scrollme row">
      <img id="envelopeFront" src="images/envelope-front.svg" alt="Front of an envelope">

      <section id="section4" class="animateme small-12 medium-10 medium-offset-1 large-10 large-offset-1 columns" data-when="exit" data-from="0.4" data-to="0" data-easing="easeout" data-translatey="300">
      <h2>Contact Me</h2>
        <div class="row">
          <div class="small-12 medium-12 large-12 columns">
            <p>If you’re interested in working with me, feel free to shoot me an email and I’ll get back to you as soon as I can!</p>
          </div>
          <form action="index.php" method="post" class="small-12 medium-12 large-12 columns">
              <input type="text" required class="name" name="name" placeholder="Name">
              <input type="email" required class="email" name="email" placeholder="Email">
              <input type="color" class="favColor" name="favColor">
              <textarea name="comments" class="comments" required cols="50" rows="8" placeholder="Write your message here..."></textarea>
              <div class="bottom row">
                <input name="submit" type="submit" value="Send!" class="small-6 medium-6 medium-offset-3 large-6 large-offset-3 columns submit">
                <!--<a class="small-3 small-offset-3 columns" href="https://www.linkedin.com/in/ryanwagget/" title="LinkedIn" id="LinkedIn">
                  <img src="images/linkedin.svg" alt="LinkedIn Icon">
                </a>-->
              </div>
          </form>
        </div>
      </section>

      <section id="section5" class="small-12 medium-10 medium-pull-1 large-10 large-offset-1 columns" data-hide-for:"medium" data-when="exit" data-from="0.4" data-to="0" data-easing="easeout" data-translatey="300">
      <h2>Contact Me</h2>
        <div class="row">
          <div class="small-12 medium-12 large-12 columns">
            <p>If you’re interested in working with me, feel free to shoot me an email and I’ll get back to you as soon as I can!</p>
          </div>
          <form action="index.php" method="post" class="small-12 medium-12 large-12 columns">
              <input type="text" required class="name" name="name" placeholder="Name">
              <input type="email" required class="email" name="email" placeholder="Email">
              <input type="color" class="favColor" name="favColor">
              <textarea name="comments" class="comments" required cols="50" rows="8" placeholder="Write your message here..."></textarea>
              <div class=" bottom row">
                <input id="submitSmall" name="submit" type="submit" value="Send!" class="small-6 medium-6 medium-offset-3 large-6 large-offset-3 columns submit">
                <!--<a class="small-3 small-offset-3 columns" href="https://www.linkedin.com/in/ryanwagget/" title="LinkedIn" id="LinkedIn">
                  <img src="images/linkedin.svg" alt="LinkedIn Icon">
                </a>-->
              </div>
          </form>
        </div>
      </section>

    </div>



    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>
    <!--<script src="js/contentWork.js"></script>-->
    <script src="js/lightbox.js"></script>
    <!--<script src="js/modules/videos.js"></script>-->
  </body>
</html>
