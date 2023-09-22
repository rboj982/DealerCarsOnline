const images = document.querySelectorAll('.cars-offer-one img');
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

images.forEach((image, i) => {
  image.addEventListener('click', () => {
    modal.innerHTML = `
      <div class="modal-content">
        <span class="prev-slide">&lt;</span>
        <img src="${image.src}" alt="">
        <span class="next-slide">&gt;</span>
      </div>
    `;

    const prevButton = modal.querySelector('.prev-slide');
    const nextButton = modal.querySelector('.next-slide');
    let currentIndex = i;

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modal.querySelector('img').src = images[currentIndex].src;
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      modal.querySelector('img').src = images[currentIndex].src;
    });

    modal.style.display = 'block';

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});