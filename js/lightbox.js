(function(){
 	var theImages = document.querySelectorAll('.portfolioPiece');

  function loadThumbs()
  {

    const url = './admin/includes/functions.php?getWork=true';

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {showThumbs(data); })
    .catch(function(error)
    {
      console.log(error);
    });}

    function showThumbs(data)
    {
      let content = document.querySelector('#content');
      data.forEach(thumb =>
      {
          let docFrag =
          `<div id="${thumb.images_projects}" class="small-12 medium-4 large-4 columns green portfolioPiece" style="background: url('./graphic/${thumb.images_link}') no-repeat; border: 1px solid #316f3f;
        	background-size: 115%;
        	background-position: 50%;
        	cursor: pointer;">
            <h4 class="lightbox-title" >${thumb.images_title}</h4>
          </div>`;
          content.innerHTML += docFrag;
          //console.log(thumb.images_link);
          let theImages = document.querySelectorAll('.portfolioPiece');

          theImages.forEach(function(element, index)
          {
        	 element.addEventListener('click', popLightbox, false);
          });
      });
    }

function popLightbox()
  {
    const url = './admin/includes/functions.php?PortfolioPiece=' + this.id;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {addContent(data); })
    .catch(function(error)
    {
      console.log(error);
    });}

    function addContent(data)
    {
      const {images_link, images_title, images_desc} = data;
      var lb = document.querySelector('.lightbox');
      var lbClose = document.querySelector('.close-lightbox');
      var lbImage = document.querySelector('.lightbox-img');
      var lbDesc = document.querySelector('.lightbox-desc');

      lbClose.addEventListener('click', closelightbox ,false);

      lb.style.display = "block";

      let lightboxImg = document.querySelector('.lightbox-img').src = "graphic/" + images_link;
  		let lightboxTitle = document.querySelector('.lightbox-title').textContent = images_title;
  		let lightboxDesc = document.querySelector('.lightbox-desc').textContent = images_desc;
    }



function closelightbox()
{
  let lightbox = document.querySelector('.lightbox');
  lightbox.style.display = "none";
}

loadThumbs();

})();
