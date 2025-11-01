// ============================================
// BANNER DE COOKIES - RGPD COMPLIANT
// ============================================

function initCookieBanner() {
  // Verificar si ya hay consentimiento
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (cookieConsent) {
    // Ya hay decisión previa
    if (cookieConsent === 'accepted') {
      // Recargar analytics si acepto antes
      if (typeof initAnalytics === 'function') {
        initAnalytics();
      }
    }
    return;
  }
  
  // Mostrar banner
  showCookieBanner();
}

function showCookieBanner() {
  // Crear banner
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-content">
      <div class="cookie-text">
        <p><strong>🍪 Utilizamos cookies</strong></p>
        <p>Usamos cookies propias y de terceros (Google Analytics, Facebook) para analizar el tráfico y mejorar tu experiencia. 
        <a href="#" class="cookie-link">Más información</a></p>
      </div>
      <div class="cookie-buttons">
        <button id="accept-cookies" class="cookie-btn accept">Aceptar</button>
        <button id="reject-cookies" class="cookie-btn reject">Rechazar</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(banner);
  
  // Event listeners
  document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
  document.getElementById('reject-cookies').addEventListener('click', rejectCookies);
}

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  hideCookieBanner();
  
  // Inicializar analytics
  if (typeof initAnalytics === 'function') {
    initAnalytics();
  }
  
  console.log('✅ Cookies aceptadas');
}

function rejectCookies() {
  localStorage.setItem('cookieConsent', 'rejected');
  hideCookieBanner();
  
  console.log('❌ Cookies rechazadas');
}

function hideCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.style.opacity = '0';
    setTimeout(() => banner.remove(), 300);
  }
}

// Iniciar al cargar la página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieBanner);
} else {
  initCookieBanner();
}
