const form = document.getElementById('investmentForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      investment: formData.get('investment'),
      source: formData.get('source'),
      privacy: formData.get('privacy'),
      timestamp: new Date().toISOString()
    };
    
    try {
      // Enviar a Supabase
      const response = await fetch('/.netlify/functions/submit-investment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        // Mostrar mensaje de éxito
        document.getElementById('formMessage').style.display = 'block';
        form.style.display = 'none';
        
        // Track conversión
        if (window.gtag) {
          gtag('event', 'lead_submitted', {
            investment_range: data.investment,
            source: data.source
          });
        }
        
        // Limpiar formulario después de 3 segundos
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          document.getElementById('formMessage').style.display = 'none';
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario. Intenta de nuevo.');
    }
  });
}

// Validación en tiempo real
if (form) {
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
  });
}

function validateField(field) {
  const errorMessage = field.nextElementSibling;
  
  if (field.type === 'email') {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
    if (!isValid && field.value) {
      if (errorMessage) errorMessage.textContent = 'Email inválido';
      field.classList.add('error');
    } else {
      if (errorMessage) errorMessage.textContent = '';
      field.classList.remove('error');
    }
  }
  
  if (field.type === 'tel') {
    const isValid = /^\+?[0-9\s\-()]{9,}$/.test(field.value);
    if (!isValid && field.value) {
      if (errorMessage) errorMessage.textContent = 'Teléfono inválido';
      field.classList.add('error');
    } else {
      if (errorMessage) errorMessage.textContent = '';
      field.classList.remove('error');
    }
  }
}
