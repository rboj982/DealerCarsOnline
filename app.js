document.addEventListener("DOMContentLoaded", function() {
  
  const carsOfferDivs = document.querySelectorAll(".cars-offer-one, .cars-offer-two, .cars-offer-three, .cars-offer-four, .cars-offer-five, .cars-offer-six, .cars-offer-seven, .cars-offer-eight, .cars-offer-nine");

  carsOfferDivs.forEach(carsOfferDiv => {
    const images = carsOfferDiv.querySelectorAll("img");
    let currentIndex = 0;
    let viewerWindow;

    function showCurrentImage() {
      const currentImage = images[currentIndex];
      const container = document.createElement("div");
      container.classList.add("image-container");
      viewerWindow.document.body.innerHTML = ''; 
      viewerWindow.document.body.appendChild(container);

      const imgElement = document.createElement("img");
      imgElement.src = currentImage.src;
      imgElement.style.maxWidth = "100%";
      imgElement.style.maxHeight = "100%";
      container.appendChild(imgElement);

      const nextArrow = document.createElement("div");
      nextArrow.classList.add("next-arrow");
      nextArrow.innerHTML = ">>>>>>>>>>>>";
      nextArrow.addEventListener("click", showNextImage);
      container.appendChild(nextArrow);

      const prevArrow = document.createElement("div");
      prevArrow.classList.add("prev-arrow");
      prevArrow.innerHTML = "<<<<<<<<<<<<";
      prevArrow.addEventListener("click", showPreviousImage);
      container.appendChild(prevArrow);
    }

    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showCurrentImage();
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showCurrentImage();
    }

    carsOfferDiv.addEventListener("click", function(event) {

      if (event.target.tagName === "IMG") {

        const windowWidth = 50 * 16; 
        const windowHeight = 40 * 16;
        viewerWindow = window.open("", "Image Viewer", `width=${windowWidth},height=${windowHeight}`);
        showCurrentImage();
      }
    });
  });
});
