// ============================================
// ANALYTICS CRÍTICO - GA4 + Facebook Pixel
// ============================================

// Configuración
const ANALYTICS_CONFIG = {
  ga4: {
    measurementId: 'G-CFF9X6107G',
    enabled: true
  },
  facebook: {
    pixelId: '', // Añadir cuando tengas el ID de Facebook
    enabled: false
  }
};

// ============================================
// FUNCIONES DE TRACKING
// ============================================

// Inicializar Google Analytics 4
function initGA4() {
  if (!ANALYTICS_CONFIG.ga4.enabled) return;
  
  // Cargar gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4.measurementId}`;
  document.head.appendChild(script);
  
  // Configurar dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', ANALYTICS_CONFIG.ga4.measurementId, {
    'anonymize_ip': true, // RGPD
    'send_page_view': true
  });
  
  console.log('✅ Google Analytics 4 inicializado');
}

// Inicializar Facebook Pixel
function initFacebookPixel() {
  if (!ANALYTICS_CONFIG.facebook.enabled || !ANALYTICS_CONFIG.facebook.pixelId) return;
  
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  fbq('init', ANALYTICS_CONFIG.facebook.pixelId);
  fbq('track', 'PageView');
  
  console.log('✅ Facebook Pixel inicializado');
}

// ============================================
// EVENTOS CRÍTICOS
// ============================================

// Evento: Scroll al formulario
function trackScrollToForm() {
  const form = document.getElementById('form');
  if (!form) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (window.gtag) {
          gtag('event', 'scroll_to_form', {
            'event_category': 'conversion',
            'event_label': 'Formulario Visible'
          });
        }
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(form);
}

// Evento: Click en CTAs
function trackCTAClicks() {
  // CTA Hero
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.gtag) {
        gtag('event', 'cta_click', {
          'event_category': 'conversion',
          'event_label': btn.textContent.trim(),
          'value': 1
        });
      }
    });
  });
  
  // CTAs intermedios
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.gtag) {
        gtag('event', 'cta_mid_click', {
          'event_category': 'conversion',
          'event_label': 'CTA Intermedio'
        });
      }
    });
  });
}

// Evento: Formulario enviado
function trackFormSubmit() {
  const form = document.getElementById('form');
  if (!form) return;
  
  form.addEventListener('submit', () => {
    // Google Analytics
    if (window.gtag) {
      gtag('event', 'conversion', {
        'send_to': ANALYTICS_CONFIG.ga4.measurementId,
        'event_category': 'lead',
        'event_label': 'Formulario Enviado',
        'value': 1
      });
    }
    
    // Facebook Pixel
    if (window.fbq && ANALYTICS_CONFIG.facebook.enabled) {
      fbq('track', 'Lead', {
        content_name: 'Formulario Inversión',
        value: 20000,
        currency: 'EUR'
      });
    }
  });
}

// ============================================
// INICIALIZACIÓN
// ============================================

function initAnalytics() {
  // Verificar consentimiento de cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (cookieConsent === 'accepted') {
    initGA4();
    initFacebookPixel();
    
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        trackScrollToForm();
        trackCTAClicks();
        trackFormSubmit();
      });
    } else {
      trackScrollToForm();
      trackCTAClicks();
      trackFormSubmit();
    }
  }
}

// Iniciar analytics
initAnalytics();
