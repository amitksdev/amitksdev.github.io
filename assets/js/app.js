const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const joinForm = document.querySelector(".join-form");
const formNote = document.getElementById("form-note");

if (joinForm && formNote) {
  joinForm.addEventListener("submit", () => {
    formNote.textContent = "You are subscribed. Next build drop lands this Friday.";
  });
}

// Carousel functionality
const carousel = document.querySelector('.carousel');
if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentSlide = 0;
  let autoRotateInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoRotate() {
    autoRotateInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoRotate() {
    clearInterval(autoRotateInterval);
  }

  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoRotate();
    startAutoRotate();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoRotate();
    startAutoRotate();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      stopAutoRotate();
      startAutoRotate();
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoRotate);
  carousel.addEventListener('mouseleave', startAutoRotate);

  // Start auto-rotate
  startAutoRotate();
}
