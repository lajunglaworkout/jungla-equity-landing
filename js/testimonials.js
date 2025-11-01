// ============================================
// TESTIMONIALS AUTO-SCROLL
// ============================================

let currentTestimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.dot');

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove('active');
    testimonialDots[i].classList.remove('active');
  });
  
  testimonialCards[index].classList.add('active');
  testimonialDots[index].classList.add('active');
  currentTestimonialIndex = index;
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
  showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
  showTestimonial(currentTestimonialIndex);
}

function goToTestimonial(index) {
  showTestimonial(index);
}

// Auto-scroll cada 5 segundos
if (testimonialCards.length > 0) {
  setInterval(nextTestimonial, 5000);
}
