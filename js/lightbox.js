// Definimos las imágenes de la galería
const imageUrls = [
    "images/portfolio/botanique.jpg",
    "images/portfolio/englandtrip.jpg",
    "images/portfolio/everyday.jpg",
    "images/portfolio/little-pea.jpg",
    "images/portfolio/TheAnalog.jpg",
    "images/portfolio/yoko.jpg"
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
  
    slides[slideIndex - 1].style.display = "flex";
  }
  