// Definimos las imágenes de la galería
const imageUrls = [
    "https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg",
    "https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg",
    "https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg",
    "https://images.pexels.com/photos/2882361/pexels-photo-2882361.jpeg",
  ];
  
  // Recopilamos todas las imágenes con la clase "lightbox-image"
  const lightboxImages = document.querySelectorAll(".lightbox-image");
  
  // Iteramos sobre cada imagen y asignamos la función toSlide()
  lightboxImages.forEach((image, index) => {
    image.src = imageUrls[index % imageUrls.length];
    image.onclick = () => {
      openLightbox();
      toSlide(index + 1);
    };
  });
  
  var slideIndex = 1;
  showSlide(slideIndex);
  
  function openLightbox() {
    document.getElementById("Lightbox").style.display = "block";
  }
  
  function closeLightbox() {
    document.getElementById("Lightbox").style.display = "none";
  }
  
  function changeSlide(n) {
    showSlide((slideIndex += n));
  }
  
  function toSlide(n) {
    showSlide((slideIndex = n));
  }
  
  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
  
    if (n > slides.length) {
      slideIndex = 1;
    }
  
    if (n < 1) {
      slideIndex = slides.length;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
  }
  