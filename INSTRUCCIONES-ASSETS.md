# 🚀 Cómo Subir tus Videos y Fotos de Alta Calidad

## 📋 Resumen Rápido

Tu landing page está **95% completa**. Solo falta que subas tus assets de alta calidad (fotos y videos) para que se vea espectacular.

## 🎯 Assets que Necesitas

### 🔴 PRIORIDAD ALTA (Necesarios para lanzar)

1. **hero-background.mp4** - Video de fondo del Hero
   - Ubicación: `assets/videos/hero-background.mp4`
   - Qué mostrar: Gente entrenando en La Jungla, energía, movimiento
   - Duración: 10-30 segundos (se repetirá en loop)
   - Tamaño: 1920x1080px, máximo 20MB

2. **centros-fisicos.jpg** - Foto de tus centros
   - Ubicación: `assets/images/centros-fisicos.jpg`
   - Qué mostrar: Centro lleno, gente entrenando, ambiente
   - Tamaño: 1200x800px, máximo 300KB

3. **academy.jpg** - Foto de La Jungla Academy
   - Ubicación: `assets/images/academy.jpg`
   - Qué mostrar: Clase de formación, alumnos, instructor
   - Tamaño: 1200x800px, máximo 300KB

4. **tech.jpg** - Foto/Mockup de La Jungla Tech
   - Ubicación: `assets/images/tech.jpg`
   - Qué mostrar: App, dashboard, tecnología IA
   - Tamaño: 1200x800px, máximo 300KB

### 🟡 PRIORIDAD MEDIA (Mejoran la experiencia)

5. **ecosystem-overview.mp4** - Video explicativo
   - Ubicación: `assets/videos/ecosystem-overview.mp4`
   - Qué mostrar: Carlos explicando el ecosistema
   - Duración: 1-3 minutos
   - Tamaño: 1920x1080px, máximo 30MB

6. **video-poster.jpg** - Imagen de portada del video
   - Ubicación: `assets/images/video-poster.jpg`
   - Qué mostrar: Frame del video o foto de Carlos
   - Tamaño: 1920x1080px, máximo 400KB

## 📥 Métodos para Subir Assets

### Método 1: Arrastrar y Soltar (MÁS FÁCIL)

1. Abre **Finder**
2. Navega a: `/Users/user/Desktop/Proyectos/jungla-equity-landing/assets`
3. Arrastra tus archivos a las carpetas:
   - Videos → carpeta `videos/`
   - Imágenes → carpeta `images/`
4. Renombra los archivos exactamente como se indica arriba
5. Refresca el navegador (⌘+R)

### Método 2: Terminal (PARA EXPERTOS)

```bash
# Navega a la carpeta
cd /Users/user/Desktop/Proyectos/jungla-equity-landing/assets

# Copia tus videos
cp /ruta/a/tu/video.mp4 videos/hero-background.mp4

# Copia tus imágenes
cp /ruta/a/tu/imagen.jpg images/centros-fisicos.jpg
```

### Método 3: Google Drive/WeTransfer (ARCHIVOS GRANDES)

Si tus archivos son muy grandes (>50MB):

1. Súbelos a Google Drive o WeTransfer
2. Comparte el link conmigo
3. Yo los descargo y optimizo
4. Los subo a tu proyecto

## 🎨 Consejos para Mejores Assets

### Para Videos

✅ **SÍ hacer:**
- Grabar en horizontal (landscape)
- Buena iluminación natural
- Mostrar acción y energía
- Estabilizar la cámara
- Audio claro (si aplica)

❌ **NO hacer:**
- Grabar en vertical
- Poca luz o sombras duras
- Video pixelado o borroso
- Cámara temblando
- Audio con ruido

### Para Fotos

✅ **SÍ hacer:**
- Alta resolución (mínimo 1200px de ancho)
- Buena iluminación
- Personas en acción
- Colores vibrantes
- Composición profesional

❌ **NO hacer:**
- Fotos borrosas
- Poca luz
- Fotos cortadas mal
- Marcas de agua
- Baja resolución

## 🔧 Optimización de Assets

### Si tus archivos son muy grandes:

**Para Imágenes:**
1. Ve a https://tinypng.com/
2. Arrastra tu imagen
3. Descarga la versión optimizada
4. Sube la versión optimizada

**Para Videos:**
1. Usa HandBrake (gratis): https://handbrake.fr/
2. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
3. Exporta
4. Sube el archivo exportado

## ✅ Checklist de Subida

Marca cuando hayas subido cada asset:

- [ ] `hero-background.mp4` - Video de fondo
- [ ] `centros-fisicos.jpg` - Foto centros
- [ ] `academy.jpg` - Foto academy
- [ ] `tech.jpg` - Foto tech
- [ ] `ecosystem-overview.mp4` - Video explicativo
- [ ] `video-poster.jpg` - Poster del video

## 🌐 Verificar que Funciona

Después de subir los assets:

1. Abre http://localhost:8080
2. Refresca la página (⌘+R o Ctrl+R)
3. Verifica que las imágenes se ven
4. Verifica que el video de fondo se reproduce
5. Verifica que el video explicativo funciona

## 🚨 Solución de Problemas

### "No se ve mi imagen"

1. Verifica el nombre del archivo (debe ser exacto)
2. Verifica que está en la carpeta correcta
3. Refresca el navegador con ⌘+Shift+R (limpia caché)

### "El video no se reproduce"

1. Verifica que es formato MP4
2. Verifica el tamaño (<20MB para hero)
3. Prueba en otro navegador
4. Comprueba la consola del navegador (F12)

### "Los archivos son muy grandes"

1. Usa las herramientas de optimización arriba
2. O compárteme el link y yo los optimizo
3. Considera reducir la resolución si es necesario

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:

1. **Comparte pantalla** - Puedo ver qué pasa
2. **Envía los archivos** - Los subo yo directamente
3. **Usa Google Drive** - Comparte link y yo descargo

## 🎯 Próximos Pasos

Una vez subidos los assets:

1. ✅ Verificar que todo se ve bien
2. ✅ Ajustar colores/textos si es necesario
3. ✅ Configurar Supabase para formularios
4. ✅ Deploy a producción (Netlify/Vercel)
5. ✅ Configurar dominio personalizado

---

**¿Listo para subir tus assets?** 🚀

Cuando los tengas listos, avísame y verificamos que todo funciona perfectamente.
