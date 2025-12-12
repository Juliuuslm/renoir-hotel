# 📁 Estructura de Imágenes y Favicon - Hotel Renoir

## Descripción General

El proyecto está organizado con carpetas específicas para favicons e imágenes de cada sección. Esto permite mantener una estructura clara y facilita el mantenimiento de assets.

---

## 📂 Estructura de Carpetas

```
public/
├── favicon/                          # 🔗 Iconos del sitio
│   ├── .gitkeep
│   ├── favicon.ico                  # Favicon principal (32x32px)
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png         # iOS (180x180px)
│   ├── android-chrome-192x192.png   # Android
│   ├── android-chrome-512x512.png   # Android grande
│   ├── site.webmanifest
│   └── README.md
│
└── images/                          # 🖼️ Imágenes por sección
    ├── README.md                    # Guía general de imágenes
    ├── hero/                        # 🏨 Sección Hero/Portada
    │   ├── .gitkeep
    │   ├── lobby.jpg               # Recomendado: 2070x1080px
    │   ├── exterior.jpg
    │   ├── entrance.jpg
    │   └── README.md
    │
    ├── suites/                      # 🛏️ Suites y Habitaciones
    │   ├── .gitkeep
    │   ├── atelier-suite-main.jpg  # Recomendado: 1200-2000px ancho
    │   ├── atelier-suite-bedroom.jpg
    │   ├── impressionist-suite-main.jpg
    │   ├── deluxe-room-1.jpg
    │   ├── standard-room-1.jpg
    │   └── README.md                # 15-30 imágenes sugeridas
    │
    ├── gastronomia/                 # 🍽️ Restaurante y Comida
    │   ├── .gitkeep
    │   ├── restaurant-main.jpg      # Recomendado: 1200-2000px ancho
    │   ├── restaurant-ambiance.jpg
    │   ├── bar-area.jpg
    │   ├── signature-dish-1.jpg
    │   ├── wine-cellar.jpg
    │   └── README.md                # 15-25 imágenes sugeridas
    │
    ├── wellness/                    # 🧖 Spa y Wellness
    │   ├── .gitkeep
    │   ├── spa-entrance.jpg         # Recomendado: 1200-2000px ancho
    │   ├── treatment-room-1.jpg
    │   ├── massage-room.jpg
    │   ├── sauna.jpg
    │   ├── steam-room.jpg
    │   └── README.md                # 15-20 imágenes sugeridas
    │
    ├── experiencias/                # 🎭 Eventos y Experiencias
    │   ├── .gitkeep
    │   ├── art-workshop.jpg         # Recomendado: 800-1200px ancho
    │   ├── wine-tasting.jpg
    │   ├── cooking-class.jpg
    │   ├── wedding-setup.jpg
    │   ├── gala-evening.jpg
    │   └── README.md                # 15-25 imágenes sugeridas
    │
    └── contact/                     # 📞 Información de Contacto
        ├── .gitkeep
        ├── reception-desk.jpg       # Recomendado: 800-1200px ancho
        ├── map-location.jpg
        ├── neighborhood.jpg
        ├── paris-property.jpg
        ├── mexico-city-property.jpg
        └── README.md                # 8-12 imágenes sugeridas
```

---

## 🎯 Cómo Usar

### 1. **Agregar Favicon**

Coloca tus archivos de favicon en `public/favicon/`:

```
public/favicon/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-96x96.png
├── apple-touch-icon.png (180x180)
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

**Herramientas para generar favicons:**
- [Favicon Generator](https://www.favicon-generator.org/)
- [Favico.io](https://favico.io/)
- [ICO Convert](https://icoconvert.com/)

### 2. **Agregar Imágenes por Sección**

Para cada sección, agrega imágenes a su carpeta correspondiente:

```bash
# Suites
public/images/suites/
├── atelier-suite-main.jpg
├── atelier-suite-bedroom.jpg
├── impressionist-suite-main.jpg
└── ...

# Gastronomía
public/images/gastronomia/
├── restaurant-main.jpg
├── signature-dish-1.jpg
└── ...
```

### 3. **Optimizar Imágenes**

Antes de subir, optimiza tus imágenes:

**Online:**
- [TinyPNG/TinyJPG](https://tinypng.com/)
- [Compressor.io](https://compressor.io/)
- [ImageOptim Online](https://imageoptim.com/online)

**Localmente:**
```bash
# Con ImageMagick
mogrify -quality 80 -resize 2000x1500 "image.jpg"

# Con ImageOptim (Mac)
imageoptim *.jpg *.png

# Con ffmpeg
ffmpeg -i input.jpg -q:v 6 output.jpg
```

---

## 📏 Especificaciones de Imágenes

### Por Sección:

| Sección | Ancho Recomendado | Altura Recomendada | Proporción | Calidad | Cantidad |
|---------|-------------------|-------------------|-----------|---------|----------|
| **Hero** | 2070px | 1080px | 16:9 | 80-85% | 3-5 |
| **Suites** | 1200-2000px | 800-1500px | Variable | 75-85% | 20-30 |
| **Gastronomía** | 1200-2000px | 800-1500px | Variable | 75-85% | 15-25 |
| **Wellness** | 1200-2000px | 800-1500px | Variable | 75-85% | 15-20 |
| **Experiencias** | 800-1200px | 600-1000px | Variable | 75-85% | 15-25 |
| **Contacto** | 800-1200px | 600-1000px | Variable | 75-85% | 8-12 |

### Formatos:

- **JPG/JPEG**: Para fotografías y fotos
- **PNG**: Para gráficos con transparencia
- **WebP**: Automáticamente generado para navegadores modernos

---

## 🚀 Optimización Automática

Las imágenes se optimizan automáticamente mediante el custom loader personalizado:

- **Mobile**: Calidad 70%, máximo 750px de ancho, formato WebP
- **Desktop**: Calidad 80%, ancho completo
- Lazy loading automático para todas las imágenes

---

## 📝 Notas Importantes

1. **Nombres de archivo**: Usa nombres descriptivos en minúsculas con guiones
   - ✅ `atelier-suite-bedroom.jpg`
   - ❌ `AtelierSuiteBedroom.JPG`

2. **Rutas en Next.js**: Usa rutas relativas a `public/`
   ```tsx
   <Image src="/images/suites/atelier-suite-main.jpg" alt="..." />
   ```

3. **Alt text**: Siempre incluye descripciones accesibles en el atributo `alt`

4. **Dimensiones**: Especifica el ancho y alto de la imagen en Next.js
   ```tsx
   <Image
     src="/images/hero/lobby.jpg"
     alt="Lobby principal"
     width={2070}
     height={1080}
   />
   ```

---

## 📚 Cada carpeta tiene su propio README

Dentro de cada carpeta de imágenes encontrarás un `README.md` con:
- Lista detallada de imágenes sugeridas
- Especificaciones exactas
- Cantidad recomendada
- Notas de estilo y composición

Ejemplo: `public/images/suites/README.md`

---

## ✅ Checklist para agregar imágenes

- [ ] Crear/preparar imagen
- [ ] Optimizar tamaño y calidad
- [ ] Renombrar con formato correcto
- [ ] Colocar en carpeta correcta
- [ ] Confirmar que aparece en la web
- [ ] Verificar en mobile y desktop
- [ ] Optimizar si es necesario

---

## 💡 Tips Adicionales

1. **Usa imágenes de alta calidad**: El trabajo de optimización se hace automáticamente
2. **Consistencia visual**: Mantén estilo fotográfico consistente dentro de secciones
3. **Lighting**: Buena iluminación es crucial, especialmente para suites y gastronomía
4. **Variedad**: Incluye diferentes ángulos y detalles
5. **Actualizaciones**: Actualiza imágenes regularmente para mantener contenido fresco

---

Última actualización: Diciembre 2025
