// Analytics Hormozi - Tracking de conversión
class HormoziAnalytics {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.events = [];
    this.init();
  }
  
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  init() {
    this.trackPageView();
    this.trackScrollDepth();
    this.trackTimeOnPage();
    this.trackCTAClicks();
    this.trackFormInteractions();
    this.trackSectionViews();
  }
  
  trackPageView() {
    this.log('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      referrer: document.referrer
    });
  }
  
  trackScrollDepth() {
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) {
          this.log('scroll_depth', { depth: Math.round(maxScroll) });
        }
      }
    });
  }
  
  trackTimeOnPage() {
    setInterval(() => {
      const timeOnPage = Math.round((Date.now() - this.startTime) / 1000);
      if (timeOnPage % 30 === 0) {
        this.log('time_on_page', { seconds: timeOnPage });
      }
    }, 1000);
  }
  
  trackCTAClicks() {
    document.querySelectorAll('[onclick*="scrollToForm"], .btn-primary, .btn-investment').forEach(btn => {
      btn.addEventListener('click', () => {
        this.log('cta_click', {
          button_text: btn.textContent.trim(),
          button_class: btn.className,
          section: btn.closest('section')?.id || 'unknown'
        });
      });
    });
  }
  
  trackFormInteractions() {
    const form = document.getElementById('investmentForm');
    if (form) {
      form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('focus', () => {
          this.log('form_field_focus', { field_name: field.name });
        });
        
        field.addEventListener('change', () => {
          this.log('form_field_change', { field_name: field.name });
        });
      });
      
      form.addEventListener('submit', () => {
        this.log('form_submit', { form_id: form.id });
      });
    }
  }
  
  trackSectionViews() {
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.log('section_view', {
            section_id: entry.target.id,
            section_title: entry.target.querySelector('h2')?.textContent || 'Unknown'
          });
        }
      });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
  }
  
  log(eventName, eventData) {
    const event = {
      sessionId: this.sessionId,
      eventName,
      eventData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };
    
    this.events.push(event);
    console.log('📊 Analytics:', eventName, eventData);
    
    // Enviar a Supabase cada 10 eventos
    if (this.events.length % 10 === 0) {
      this.sendToSupabase();
    }
  }
  
  async sendToSupabase() {
    try {
      await fetch('/.netlify/functions/track-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: this.events })
      });
      this.events = [];
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }
}

// Inicializar analytics
const analytics = new HormoziAnalytics();

// Enviar eventos pendientes al cerrar la página
window.addEventListener('beforeunload', () => {
  if (analytics.events.length > 0) {
    analytics.sendToSupabase();
  }
});
