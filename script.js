// Existing Locomotive Scroll initialization (as uploaded in VS Code)
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// ----------------- Horizontal Slider Code -----------------

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.querySelector('.slider-track');
  const sliderCards = document.querySelectorAll('.slider-card');
  const btnLeft = document.querySelector('.slider-btn.left');
  const btnRight = document.querySelector('.slider-btn.right');

  let currentSlide = 0;
  
  // Function to calculate the width of a slider card (including margin)
  function getSliderCardWidth() {
    const sliderCard = sliderCards[0];
    const style = getComputedStyle(sliderCard);
    const width = sliderCard.offsetWidth;
    const marginRight = parseFloat(style.marginRight);
    return width + marginRight;
  }
  
  // Left arrow click
  btnLeft.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });
  
  // Right arrow click
  btnRight.addEventListener('click', () => {
    if (currentSlide < sliderCards.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });
  
  // Update the slider position
  function updateSlider() {
    const cardWidth = getSliderCardWidth();
    sliderTrack.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  }
});