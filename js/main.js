// Scroll to form
function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

// Download PDF
function downloadPDF() {
  alert('Descargando presentación...');
  // Aquí iría la lógica real de descarga
}

// Countdown timer
function updateCountdown() {
  const targetDate = new Date('2025-12-15T23:59:59').getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;
  
  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
  }
}

// Testimonials carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function goToTestimonial(index) {
  currentTestimonial = index;
  showTestimonial(currentTestimonial);
}

// Intersection Observer para animaciones
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animationType = entry.target.dataset.animate;
      entry.target.classList.add(`animate-${animationType}`);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Inicializar countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Analytics tracking
function trackEvent(eventName, eventData) {
  if (window.gtag) {
    gtag('event', eventName, eventData);
  }
  console.log('Event tracked:', eventName, eventData);
}

// Track page views
trackEvent('page_view', {
  page_title: document.title,
  page_location: window.location.href
});

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('cta_click', {
      button_text: btn.textContent,
      button_type: btn.className
    });
  });
});
