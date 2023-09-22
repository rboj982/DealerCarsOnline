// JavaScript za kontrolu galerije slika

const images = document.querySelectorAll('.cars-offer-one img');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentImage = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
});

nextButton.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
});

// Prikaz prve slike kada se stranica učita
showImage(currentImage);