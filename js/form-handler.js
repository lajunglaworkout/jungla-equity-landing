// Configuración de Supabase
const SUPABASE_URL = 'https://gfnjlmfziczimaohgkct.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbmpsbWZ6aWN6aW1hb2hna2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMzc0NjgsImV4cCI6MjA2OTcxMzQ2OH0.1hn6Tse7FI58VA90kU2YXiweNesa8Ndrl0w9qKixph0';

// Cliente de Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Configuración de Web3Forms (email)
const WEB3FORMS_ACCESS_KEY = 'ece2eff8-c97c-4c3c-9914-ba05410e5e15';

// Manejar el envío del formulario
const investmentForm = document.getElementById('form');
if (investmentForm) {
  investmentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalButtonContent = submitButton.innerHTML;
  
  try {
    // Deshabilitar botón y mostrar loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Enviando...</span>';
    
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const investorProfile = formData.get('investorProfile');
    
    // Datos para Supabase (ahora CON investor_profile)
    const supabaseData = {
      full_name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      investment_range: formData.get('investment'),
      investor_profile: investorProfile,
      source: formData.get('source'),
      message: formData.get('message') || null
    };
    
    // 1. Guardar en Supabase
    const { data: savedLead, error: supabaseError } = await supabase
      .from('investment_leads')
      .insert([supabaseData])
      .select()
      .single();
    
    if (supabaseError) {
      console.error('Error guardando en Supabase:', supabaseError);
      throw new Error('Error al guardar en la base de datos');
    }
    
    console.log('✅ Lead guardado en Supabase:', savedLead);
    
    // 2. Enviar email vía Web3Forms
    const emailFormData = new FormData();
    emailFormData.append('access_key', WEB3FORMS_ACCESS_KEY);
    emailFormData.append('subject', `🚀 Nuevo Lead de Inversión: ${supabaseData.full_name}`);
    emailFormData.append('from_name', 'La Jungla - Inversión Landing');
    emailFormData.append('Nombre', supabaseData.full_name);
    emailFormData.append('Email', supabaseData.email);
    emailFormData.append('Teléfono', supabaseData.phone);
    emailFormData.append('Rango de Inversión', supabaseData.investment_range);
    emailFormData.append('Perfil de Inversor', investorProfile || 'No especificado');
    emailFormData.append('Fuente', supabaseData.source);
    if (supabaseData.message) {
      emailFormData.append('Mensaje', supabaseData.message);
    }
    
    try {
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: emailFormData
      });
      
      const emailResult = await emailResponse.json();
      
      if (emailResult.success) {
        console.log('✅ Email enviado correctamente a csuarezparra@gmail.com');
      } else {
        console.error('⚠️ Error enviando email:', emailResult);
      }
    } catch (emailError) {
      console.error('⚠️ Error al enviar email (pero el lead está guardado):', emailError);
    }
    
    // 3. Mostrar mensaje de éxito
    showSuccessMessage();
    
    // Limpiar formulario
    e.target.reset();
    
  } catch (error) {
    console.error('Error al enviar formulario:', error);
    showErrorMessage(error.message);
  } finally {
    // Rehabilitar botón
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
  }
});

// Mostrar mensaje de éxito
function showSuccessMessage() {
  const form = document.getElementById('form');
  const messageDiv = document.getElementById('formMessage');
  
  if (form && messageDiv) {
    form.style.display = 'none';
    messageDiv.style.display = 'block';
    
    // Scroll al mensaje
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Opcional: recargar después de 10 segundos
    setTimeout(() => {
      form.style.display = 'block';
      messageDiv.style.display = 'none';
    }, 10000);
  } else {
    // Fallback: mostrar alert si no encuentra los elementos
    alert('✅ ¡Gracias! Tu solicitud ha sido enviada correctamente.\n\nTe contactaremos en menos de 48 horas.');
  }
}

// Mostrar mensaje de error
function showErrorMessage(errorText) {
  alert(`❌ Error: ${errorText}\n\nPor favor, inténtalo de nuevo o contáctanos directamente por WhatsApp.`);
}

// Validación en tiempo real de email
document.getElementById('email').addEventListener('blur', (e) => {
  const email = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email && !emailRegex.test(email)) {
    e.target.style.borderColor = '#ff4444';
  } else {
    e.target.style.borderColor = 'rgba(180, 255, 0, 0.2)';
  }
  });
}

// Validación en tiempo real de teléfono
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('blur', (e) => {
    const phone = e.target.value;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    
    if (phone && !phoneRegex.test(phone)) {
      e.target.style.borderColor = '#ff4444';
    } else {
      e.target.style.borderColor = 'rgba(180, 255, 0, 0.2)';
    }
  });
}

console.log('✅ Form handler cargado correctamente');
