// Modern Accordion System with Mouse Tracking

document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 Inicializando sistema accordion...');
  initAccordion();
  initMouseTracking();
  initScrollAnimations();
  console.log('✅ Accordion system initialized');
});

function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  
  console.log(`📋 Encontrados ${headers.length} accordion headers`);
  
  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      console.log(`🖱️ Click en accordion ${index + 1}`);
      
      const section = header.parentElement;
      const content = section.querySelector('.accordion-content');
      const isActive = header.classList.contains('active');
      
      // Toggle current section
      header.classList.toggle('active');
      content.classList.toggle('active');
      
      console.log(`${isActive ? '❌ Cerrando' : '✅ Abriendo'} sección ${index + 1}`);
      
      // Smooth scroll to section after opening
      if (!isActive) {
        setTimeout(() => {
          section.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest'
          });
        }, 300);
      }
    });
  });
}

function initMouseTracking() {
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('mousemove', (e) => {
      const rect = header.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      header.style.setProperty('--mouse-x', `${x}%`);
      header.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

function initScrollAnimations() {
  const sections = document.querySelectorAll('.accordion-section');
  
  if (sections.length === 0) {
    console.log('⚠️ No se encontraron secciones accordion');
    return;
  }
  
  const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, scrollObserverOptions);

  sections.forEach(section => {
    scrollObserver.observe(section);
  });
}
