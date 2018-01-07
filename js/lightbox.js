(function(){
 	var theImages = document.querySelectorAll('.portfolioPiece'),
 	appliedClass;

	theImages.forEach(function(element, index){
	 element.addEventListener('click', popLightbox, false);
});

function popLightbox(currentIndex, currentObject) {
		//debugger;
		let lightbox = document.querySelector('.lightbox');
		lightbox.style.display = "block";

		//let lightbox = document.querySelector('.lightbox');
		let lightboxImg = lightbox.querySelector('img');
		let lightboxDesc = lightbox.querySelector('p');
		let lightboxClose = lightbox.querySelector('.close-lightbox');

		lightboxClose.addEventListener('click', closelightbox ,false);

		lightboxImg.src = "images/" + currentObject.images[currentIndex];
		lightboxDesc.innerHTML = currentObject.ImageDescription[currentIndex];

	}

function closelightbox(currentIndex, currentObject){
  //debugger;
  let lightbox = document.querySelector('.lightbox');
  lightbox.style.display = "none";

}

 }
)();
