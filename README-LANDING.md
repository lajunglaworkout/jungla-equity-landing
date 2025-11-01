# 🌿 La Jungla Equity Landing - Guía Completa

## 📋 Descripción

Landing page profesional para micro-inversores en el ecosistema La Jungla Workout. Optimizada según frameworks de Alex Hormozi para máxima conversión.

## 🎯 Características

✅ **Optimización Hormozi**
- Ecuación de valor explícita
- 3 niveles de prueba de éxito
- Escasez real (15 inversores máximo)
- Countdown timer hasta 15 diciembre 2025
- Value stacking completo

✅ **Secciones Incluidas**
1. Hero - Headline Hormozi
2. Ecosistema - 3 verticales
3. Por Qué Ahora - Beneficios
4. Estructura Empresarial - Organigrama + gestión
5. Transparencia - Dashboard mockup
6. Pruebas de Éxito - 3 niveles
7. Compromisos - Garantías de proceso
8. Cómo Funciona - 4 pasos
9. Viaje del Inversor - Timeline
10. Cifras de Impacto - Estadísticas
11. Testimonios - Carousel
12. Opciones de Inversión - 4 cards
13. Formulario - Conversacional
14. Footer - Contacto

✅ **Tecnología**
- HTML5 semántico
- CSS3 (Flexbox, Grid)
- JavaScript vanilla
- Intersection Observer para animaciones
- Supabase para datos
- Analytics tracking Hormozi

✅ **Performance**
- <3s load time
- Mobile-first responsive
- Lazy loading de imágenes
- Critical CSS inline
- Minificación automática

✅ **Seguridad**
- CSRF protection
- Input sanitization
- Honeypot field
- Rate limiting
- HTTPS only

## 🚀 Instalación

### 1. Clonar/Descargar

```bash
cd /Users/user/Desktop/Proyectos/jungla-equity-landing
```

### 2. Configurar Supabase

```bash
# Crear proyecto en supabase.com
# Copiar URL y API key

# Crear archivo .env
cat > .env << 'ENVEOF'
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SENDGRID_API_KEY=your-sendgrid-key
ENVEOF
```

### 3. Ejecutar SQL en Supabase

```bash
# Copiar contenido de supabase/schema.sql
# Ir a Supabase > SQL Editor > New Query
# Pegar y ejecutar
```

### 4. Servir localmente

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node
npx http-server

# Opción 3: VS Code Live Server
# Instalar extensión y hacer click derecho > Open with Live Server
```

Acceder a: `http://localhost:8000`

## 📊 Estructura de Archivos

```
jungla-equity-landing/
├── index.html              # HTML principal
├── css/
│   ├── styles.css         # Estilos globales
│   ├── responsive.css     # Media queries
│   └── animations.css     # Keyframes
├── js/
│   ├── main.js            # Lógica principal
│   ├── form-validation.js # Validación + Supabase
│   └── analytics.js       # Tracking Hormozi
├── supabase/
│   └── schema.sql         # Tablas + índices
├── assets/
│   ├── images/
│   └── icons/
└── README-LANDING.md      # Este archivo
```

## 🎨 Personalización

### Colores

Editar en `css/styles.css`:

```css
:root {
  --primary-green: #B4FF00;
  --accent-yellow: #FFE600;
  --dark-bg: #000;
}
```

### Contenido

Editar en `index.html`:
- Cambiar nombres de equipo
- Actualizar cifras de impacto
- Modificar testimonios
- Ajustar rangos de inversión

### Formulario

Editar en `js/form-validation.js`:
- Campos adicionales
- Validaciones personalizadas
- Integración con tu CRM

## 📈 Analytics

Eventos tracked automáticamente:
- `page_view` - Carga de página
- `scroll_depth` - Profundidad de scroll
- `cta_click` - Clicks en botones
- `form_field_focus` - Interacción con formulario
- `section_view` - Visualización de secciones
- `form_submit` - Envío de formulario

Ver en Supabase > `analytics_events`

## 💾 Datos Guardados

### Tabla `investors`
```
- full_name
- email
- phone
- investment_range
- source
- status
- created_at
```

### Tabla `form_submissions`
```
- investor_id
- form_data (JSON)
- ip_address
- user_agent
- created_at
```

## 🔧 Deployment

### Netlify

```bash
# 1. Conectar repo a Netlify
# 2. Build command: (dejar vacío)
# 3. Publish directory: ./

# 4. Agregar variables de entorno
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
SENDGRID_API_KEY=...
```

### Vercel

```bash
# 1. Conectar repo
# 2. Framework: Other
# 3. Agregar env vars
# 4. Deploy
```

## 📧 Email de Confirmación

Configurar SendGrid:

```javascript
// En form-validation.js
const response = await fetch('/.netlify/functions/send-email', {
  method: 'POST',
  body: JSON.stringify({
    to: data.email,
    subject: 'Solicitud recibida - La Jungla',
    template: 'investment-confirmation'
  })
});
```

## 🧪 Testing

### Validar HTML

```bash
# Instalar validator
npm install -g html-validator-cli

# Validar
html-validator index.html
```

### Validar CSS

```bash
# Usar CSS Lint online
# https://csslint.net/
```

### Validar Performance

```bash
# Google PageSpeed Insights
# https://pagespeed.web.dev/

# WebPageTest
# https://www.webpagetest.org/
```

## 🐛 Troubleshooting

### Formulario no envía

1. Verificar que Supabase está configurado
2. Revisar console del navegador (F12)
3. Verificar CORS en Supabase

### Countdown no funciona

1. Verificar fecha: 15 diciembre 2025
2. Revisar zona horaria del servidor
3. Limpiar cache del navegador

### Animaciones no funcionan

1. Verificar que animations.css está cargado
2. Revisar que JavaScript está habilitado
3. Comprobar que Intersection Observer es soportado

## 📞 Contacto

- **Email**: csuarezparra@gmail.com
- **Teléfono**: +34 605 828 579
- **Web**: www.lajungla.com

## 📄 Licencia

© 2025 La Jungla Workout. Todos los derechos reservados.

---

**Última actualización**: 30 Octubre 2025
**Versión**: 1.0.0
