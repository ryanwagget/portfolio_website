
// this is now a namespace / object that wraps everything. this is closer to current dev conventions.
// var video = {
//   init() {
//     player = document.querySelector('video'),
//     thumbs = document.querySelectorAll('#vidThumbnails'),
//
//     video.getThumbs(); // call our fetch after the page loads
//   },
//
//   // fetch the videos on page load => pulling from the video table in the database
//   getThumbs() {
//     console.log("getThumbs");
//     let url = './admin/includes/functions.php?getVideos=true';
//
//     fetch(url) // do our ajax call
//       .then((resp) => resp.json()) // convert the response to JSON (built-in method)
//       .then((data) => { video.loadThumbs(data); }) // then do the process result function
//       .catch(function(error) {
//         console.log(error); // catch any errors and show them in the console
//       });
//   },
//   // create the video thumbnails and add event handling to load other vids on click
//   loadThumbs(data) {
//     //debugger;
//
//     data.forEach(thumb => {
//       let docFrag = `<div class="small-8 small-offset-2 medium-3 medium-offset-0 large-3 columns go thumbs" style="margin-top: 50px;
//                   	background: url('../motion/${thumb.videos_link}') center no-repeat;
//                   	height: 140px;
//                   	cursor: pointer;">
//                     </div>`;
//       var thumbs = document.querySelector('#vidThumbnails');
//       thumbs.innerHTML += docFrag; // add each LI back to the UL in index.html (line 44)
// console.log('adv');
//     });
//
//     // re-add event handling
//     thumbs.querySelectorAll('.go').forEach((thumb) => thumb.addEventListener('click', video.newVideo));
//   },
//   // get the path from the element clicked on (look at the video thumbs in the dev tools => LOOK AT THE ELEMENT. it has a data-videopath property)
//   newVideo() {
//     let videoPath = "/motion/" + this.dataset.videopath;
//     // load and play the source
//     try {
//       video.player.src = videoPath;
//       video.player.load();
//       video.player.play();
//
//       video.volOn();
//       // turn the overlay off again, if it's still visible
//       let overlay = document.querySelector('.vid-overlay');
//       overlay.classList.remove('show-overlay');
//
//     } catch (e) {
//       console.error(e); // output any errors
//     }
//   }
// };
//
// video.init();
