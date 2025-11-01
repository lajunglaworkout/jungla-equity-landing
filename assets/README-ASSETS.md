# 📸 Guía de Assets - La Jungla Equity Landing

## 🎯 Estructura de Carpetas

```
assets/
├── images/
│   ├── centros-fisicos.jpg       (Recomendado: 1200x800px)
│   ├── academy.jpg                (Recomendado: 1200x800px)
│   ├── tech.jpg                   (Recomendado: 1200x800px)
│   ├── video-poster.jpg           (Recomendado: 1920x1080px)
│   ├── team/
│   │   ├── carlos-suarez.jpg
│   │   ├── beni.jpg
│   │   ├── vicente.jpg
│   │   ├── diego.jpg
│   │   └── yoni-keko.jpg
│   └── gallery/
│       ├── centro-1.jpg
│       ├── centro-2.jpg
│       ├── academy-1.jpg
│       └── tech-demo.jpg
└── videos/
    ├── hero-background.mp4        (Recomendado: 1920x1080px, <20MB)
    └── ecosystem-overview.mp4     (Recomendado: 1920x1080px, <30MB)
```

## 📐 Especificaciones Técnicas

### Imágenes

**Formatos aceptados:**
- JPG (recomendado para fotos)
- PNG (para logos/gráficos con transparencia)
- WebP (mejor compresión, navegadores modernos)

**Dimensiones recomendadas:**

| Tipo | Dimensiones | Peso máximo |
|------|-------------|-------------|
| Hero Background | 1920x1080px | 500KB |
| Pillar Cards | 1200x800px | 300KB |
| Video Poster | 1920x1080px | 400KB |
| Team Photos | 800x800px | 200KB |
| Gallery | 1600x1200px | 400KB |

**Optimización:**
- Usa herramientas como TinyPNG o Squoosh.app
- Calidad JPG: 80-85%
- Siempre en RGB (no CMYK)

### Videos

**Formatos aceptados:**
- MP4 (H.264 codec) - RECOMENDADO
- WebM (VP9 codec) - Alternativa

**Especificaciones:**

| Tipo | Duración | Dimensiones | Bitrate | Peso |
|------|----------|-------------|---------|------|
| Hero Background | 10-30s (loop) | 1920x1080px | 5-8 Mbps | <20MB |
| Ecosystem Overview | 1-3 min | 1920x1080px | 8-12 Mbps | <30MB |

**Configuración de exportación:**
- Codec: H.264
- Frame rate: 30fps
- Audio: AAC, 128kbps (si aplica)
- Perfil: High
- Nivel: 4.0

## 🎨 Guía de Estilo Visual

### Colores Principales
- **Verde Lima**: #B4FF00 (marca principal)
- **Amarillo Neón**: #FFE600 (acentos)
- **Negro**: #000000 (fondos oscuros)

### Fotografía
- **Estilo**: Natural, enérgico, auténtico
- **Iluminación**: Bien iluminada, evitar sombras duras
- **Composición**: Regla de tercios, espacio negativo
- **Personas**: Mostrando acción, energía, comunidad

### Videos
- **Estilo**: Dinámico, profesional, inspirador
- **Transiciones**: Suaves, no abruptas
- **Música**: Opcional, enérgica pero no invasiva
- **Subtítulos**: Recomendado para accesibilidad

## 📥 Cómo Subir tus Assets

### Opción 1: Copiar Directamente

```bash
# Navega a la carpeta del proyecto
cd /Users/user/Desktop/Proyectos/jungla-equity-landing/assets

# Copia tus imágenes
cp /ruta/a/tus/imagenes/*.jpg images/

# Copia tus videos
cp /ruta/a/tus/videos/*.mp4 videos/
```

### Opción 2: Arrastrar y Soltar

1. Abre Finder
2. Navega a: `/Users/user/Desktop/Proyectos/jungla-equity-landing/assets`
3. Arrastra tus archivos a las carpetas correspondientes

### Opción 3: Usar Google Drive/Dropbox

Si tus archivos son muy grandes:

1. Sube a Google Drive o Dropbox
2. Comparte el link
3. Descarga con:

```bash
# Google Drive (necesitas gdown)
pip install gdown
gdown https://drive.google.com/uc?id=FILE_ID -O assets/videos/hero-background.mp4

# O usa wget para links directos
wget "URL_DIRECTA" -O assets/images/centros-fisicos.jpg
```

## ✅ Checklist de Assets Necesarios

### Imágenes Críticas (ALTA PRIORIDAD)
- [ ] `centros-fisicos.jpg` - Foto de uno de tus centros en acción
- [ ] `academy.jpg` - Foto de formación/clase Academy
- [ ] `tech.jpg` - Mockup o demo de La Jungla Tech
- [ ] `video-poster.jpg` - Frame del video del ecosistema

### Videos Críticos (ALTA PRIORIDAD)
- [ ] `hero-background.mp4` - Video loop de fondo (gente entrenando)
- [ ] `ecosystem-overview.mp4` - Carlos explicando el ecosistema

### Imágenes Opcionales (MEDIA PRIORIDAD)
- [ ] Fotos del equipo directivo
- [ ] Galería de centros
- [ ] Screenshots del CRM/Dashboard
- [ ] Logos de partners

## 🔧 Herramientas Recomendadas

### Optimización de Imágenes
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **ImageOptim** (Mac): https://imageoptim.com/

### Edición de Video
- **HandBrake**: Compresión de video
- **FFmpeg**: Conversión y optimización
- **DaVinci Resolve**: Edición profesional gratuita

### Comandos FFmpeg Útiles

```bash
# Comprimir video manteniendo calidad
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# Crear video loop de 30 segundos
ffmpeg -i input.mp4 -t 30 -c copy output.mp4

# Extraer frame para poster
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 poster.jpg

# Redimensionar video a 1920x1080
ffmpeg -i input.mp4 -vf scale=1920:1080 -c:a copy output.mp4
```

## 📊 Verificación de Assets

Después de subir, verifica:

```bash
# Ver tamaño de archivos
ls -lh assets/images/
ls -lh assets/videos/

# Ver dimensiones de imágenes
file assets/images/*.jpg

# Ver info de videos
ffprobe assets/videos/hero-background.mp4
```

## 🚀 Próximos Pasos

1. **Sube los assets críticos primero** (hero-background.mp4, centros-fisicos.jpg, etc.)
2. **Refresca el navegador** en http://localhost:8080
3. **Verifica que se cargan correctamente**
4. **Optimiza si es necesario** (si cargan lento)
5. **Sube assets opcionales** cuando tengas tiempo

## 💡 Tips Pro

- **Lazy Loading**: Las imágenes ya tienen `loading="lazy"` en el HTML
- **Responsive**: Considera crear versiones @2x para pantallas Retina
- **Fallbacks**: Si un asset no carga, aparecerá el color de fondo
- **CDN**: Para producción, considera usar Cloudinary o Imgix

## 📞 ¿Necesitas Ayuda?

Si tienes problemas subiendo assets o necesitas optimizarlos, avísame y te ayudo.

---

**Última actualización**: 30 Octubre 2025
