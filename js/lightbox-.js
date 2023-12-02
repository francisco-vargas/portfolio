// Define the images for the gallery
const imageSets = [
    [
        "images/portfolio/botanique.jpg",
        "images/portfolio/englandtrip.jpg",
        "images/portfolio/everyday.jpg",
        "images/portfolio/little-pea.jpg",
        "images/portfolio/TheAnalog.jpg",
        "images/portfolio/yoko.jpg"
    ],
    [
        "images/portfolio/Chisco_approves.jpg",
        "images/portfolio/CoolCola-01.jpg",
        "images/portfolio/Dantas_logo.jpg",
        "images/portfolio/fundapez.jpg",
        "images/portfolio/img088-01_small.jpg",
        "images/portfolio/img096color.jpg"
    ]
];

// Function to assign onclick to images in the active tab
function assignImageClickEvent(tabIndex) {
    const lightboxImages = document.querySelectorAll(".lightbox-image");
    lightboxImages.forEach((image, index) => {
        image.src = imageSets[tabIndex][index % imageSets[tabIndex].length];
        image.onclick = () => {
            openLightbox();
            toSlide(index + 1);
        };
    });
}

// Assign onclick to images in the first tab when the page loads
assignImageClickEvent(0);

// Add click event listener to tabs
const tabs = document.querySelectorAll('.tablinks');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tabContent');
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Show the clicked tab content
        const tabId = this.textContent.trim().toLowerCase().replace(/\s/g, '');
        const activeTabContent = document.querySelector(`.${tabId}`);
        activeTabContent.classList.remove('hidden');

        // Assign onclick to images in the active tab
        assignImageClickEvent(index);
    });
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
