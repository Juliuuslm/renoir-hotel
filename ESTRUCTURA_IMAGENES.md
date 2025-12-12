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

## 📊 Total de Imágenes Necesarias: 107 imágenes

### Resumen Ejecutivo por Sección:

| Sección | Imágenes Necesarias | Detalles |
|---------|-------------------|----------|
| **🏨 Hero** | **5** | Lobby, exterior, entrada, restaurante, jardín |
| **🛏️ Suites** | **26** | 2 Suites de lujo (4c/u) + 2 Deluxe (4c/u) + 2 Standard (2c/u) + Amenidades |
| **🍽️ Gastronomía** | **18** | 5 espacios + 7 platos + 3 bebidas + 3 detalles |
| **🧖 Wellness** | **20** | 4 espacios + 4 salas + 4 facilidades + 4 tratamientos + 4 detalles |
| **🎭 Experiencias** | **20** | 5 culturales + 4 naturaleza + 4 eventos + 4 momentos + 3 detalles |
| **📞 Contacto** | **12** | 4 ubicación + 3 recepción + 2 propiedades + 3 contacto |
| **🔗 Favicon** | **6-8** | .ico + PNG (16/32/96) + Apple + Android + Manifest |
| | | |
| **TOTAL** | **~107 imágenes** | + 6-8 archivos favicon |

### Especificaciones de Imágenes por Sección:

| Sección | Ancho Recomendado | Altura Recomendada | Proporción | Calidad | Cantidad |
|---------|-------------------|-------------------|-----------|---------|----------|
| **Hero** | 2070px | 1080px | 16:9 | 80-85% | **5 imágenes** |
| **Suites** | 1200-2000px | 800-1500px | Variable | 75-85% | **26 imágenes** |
| **Gastronomía** | 1200-2000px | 800-1500px | Variable | 75-85% | **18 imágenes** |
| **Wellness** | 1200-2000px | 800-1500px | Variable | 75-85% | **20 imágenes** |
| **Experiencias** | 800-1200px | 600-1000px | Variable | 75-85% | **20 imágenes** |
| **Contacto** | 800-1200px | 600-1000px | Variable | 75-85% | **12 imágenes** |

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

## 🎯 Checklist de Imágenes por Sección

Usa este checklist para saber cuántas imágenes necesitas para cada sección:

### ✅ Hero Section (5 imágenes)
- [ ] `lobby.jpg` - Vista del lobby principal
- [ ] `exterior.jpg` - Fachada exterior
- [ ] `entrance.jpg` - Entrada principal
- [ ] `restaurant-view.jpg` - Vista desde restaurante
- [ ] `garden.jpg` - Jardín o terraza

**Total requerido: 5 imágenes**

### ✅ Suites y Habitaciones (26 imágenes)
#### The Atelier Suite (4 imágenes)
- [ ] `atelier-suite-main.jpg`
- [ ] `atelier-suite-bedroom.jpg`
- [ ] `atelier-suite-bathroom.jpg`
- [ ] `atelier-suite-art.jpg`

#### Impressionist Suite (3 imágenes)
- [ ] `impressionist-suite-main.jpg`
- [ ] `impressionist-suite-view.jpg`
- [ ] `impressionist-suite-details.jpg`

#### Deluxe Suite 1 (4 imágenes)
- [ ] `deluxe-suite-1-main.jpg`
- [ ] `deluxe-suite-1-bedroom.jpg`
- [ ] `deluxe-suite-1-bathroom.jpg`
- [ ] `deluxe-suite-1-details.jpg`

#### Deluxe Suite 2 (4 imágenes)
- [ ] `deluxe-suite-2-main.jpg`
- [ ] `deluxe-suite-2-bedroom.jpg`
- [ ] `deluxe-suite-2-bathroom.jpg`
- [ ] `deluxe-suite-2-details.jpg`

#### Deluxe Room 1 (3 imágenes)
- [ ] `deluxe-room-1-main.jpg`
- [ ] `deluxe-room-1-bedroom.jpg`
- [ ] `deluxe-room-1-bathroom.jpg`

#### Deluxe Room 2 (3 imágenes)
- [ ] `deluxe-room-2-main.jpg`
- [ ] `deluxe-room-2-bedroom.jpg`
- [ ] `deluxe-room-2-bathroom.jpg`

#### Standard Room 1 (2 imágenes)
- [ ] `standard-room-1-main.jpg`
- [ ] `standard-room-1-bedroom.jpg`

#### Standard Room 2 (2 imágenes)
- [ ] `standard-room-2-main.jpg`
- [ ] `standard-room-2-bedroom.jpg`

#### Amenidades (2 imágenes)
- [ ] `amenities-closet.jpg`
- [ ] `amenities-minibar.jpg`

**Total requerido: 26 imágenes**

### ✅ Gastronomía (18 imágenes)
#### Espacios (5 imágenes)
- [ ] `restaurant-main.jpg`
- [ ] `restaurant-ambiance.jpg`
- [ ] `bar-area.jpg`
- [ ] `private-dining.jpg`
- [ ] `wine-cellar.jpg`

#### Platillos (4 imágenes)
- [ ] `signature-dish-1.jpg`
- [ ] `signature-dish-2.jpg`
- [ ] `signature-dish-3.jpg`
- [ ] `chef-special.jpg`

#### Entradas y Postres (3 imágenes)
- [ ] `appetizer.jpg`
- [ ] `dessert-1.jpg`
- [ ] `dessert-2.jpg`

#### Bebidas (3 imágenes)
- [ ] `wine-selection.jpg`
- [ ] `cocktail.jpg`
- [ ] `beverages.jpg`

#### Detalles (3 imágenes)
- [ ] `plating-detail.jpg`
- [ ] `ingredients.jpg`
- [ ] `chef-at-work.jpg`

**Total requerido: 18 imágenes**

### ✅ Wellness y Spa (20 imágenes)
#### Espacios Principales (4 imágenes)
- [ ] `spa-entrance.jpg`
- [ ] `spa-lounge.jpg`
- [ ] `relaxation-area.jpg`
- [ ] `water-features.jpg`

#### Salas de Tratamiento (4 imágenes)
- [ ] `treatment-room-1.jpg`
- [ ] `treatment-room-2.jpg`
- [ ] `massage-room.jpg`
- [ ] `facial-room.jpg`

#### Facilidades Especiales (4 imágenes)
- [ ] `sauna.jpg`
- [ ] `steam-room.jpg`
- [ ] `pool.jpg`
- [ ] `yoga-space.jpg`

#### Tratamientos en Proceso (4 imágenes)
- [ ] `massage-therapy.jpg`
- [ ] `body-treatment.jpg`
- [ ] `facial-treatment.jpg`
- [ ] `herbal-ritual.jpg`

#### Detalles y Amenidades (4 imágenes)
- [ ] `essential-oils.jpg`
- [ ] `stones.jpg`
- [ ] `spa-plants.jpg`
- [ ] `spa-amenities.jpg`

**Total requerido: 20 imágenes**

### ✅ Experiencias y Eventos (20 imágenes)
#### Experiencias Culturales (5 imágenes)
- [ ] `art-workshop.jpg`
- [ ] `wine-tasting.jpg`
- [ ] `cooking-class.jpg`
- [ ] `music-evening.jpg`
- [ ] `art-exhibition.jpg`

#### Experiencias de Naturaleza (4 imágenes)
- [ ] `garden-tour.jpg`
- [ ] `meditation-session.jpg`
- [ ] `outdoor-yoga.jpg`
- [ ] `nature-experience.jpg`

#### Eventos Especiales (4 imágenes)
- [ ] `wedding-setup.jpg`
- [ ] `corporate-event.jpg`
- [ ] `intimate-dinner.jpg`
- [ ] `gala-evening.jpg`

#### Momentos y Conexión (4 imágenes)
- [ ] `guests-enjoying.jpg`
- [ ] `sunset-moment.jpg`
- [ ] `social-gathering.jpg`
- [ ] `group-moment.jpg`

#### Detalles de Eventos (3 imágenes)
- [ ] `event-decoration.jpg`
- [ ] `event-ambiance.jpg`
- [ ] `event-details.jpg`

**Total requerido: 20 imágenes**

### ✅ Contacto (12 imágenes)
#### Ubicación y Mapas (4 imágenes)
- [ ] `map-location.jpg`
- [ ] `neighborhood.jpg`
- [ ] `street-view.jpg`
- [ ] `aerial-view.jpg`

#### Recepción y Personal (3 imágenes)
- [ ] `reception-desk.jpg`
- [ ] `front-desk-staff.jpg`
- [ ] `lobby-contact.jpg`

#### Propiedades (2 imágenes)
- [ ] `paris-property.jpg`
- [ ] `mexico-city-property.jpg`

#### Infraestructura de Contacto (3 imágenes)
- [ ] `phone-service.jpg`
- [ ] `office-space.jpg`
- [ ] `concierge-service.jpg`

**Total requerido: 12 imágenes**

### 🔗 Favicon (6-8 archivos)
- [ ] `favicon.ico`
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `favicon-96x96.png`
- [ ] `apple-touch-icon.png` (180x180)
- [ ] `android-chrome-192x192.png`
- [ ] `android-chrome-512x512.png`
- [ ] `site.webmanifest`

**Total requerido: 6-8 archivos**

---

## 📈 Resumen Final

| Sección | Imágenes | Estado |
|---------|----------|--------|
| Hero | 5 | ☐ |
| Suites | 26 | ☐ |
| Gastronomía | 18 | ☐ |
| Wellness | 20 | ☐ |
| Experiencias | 20 | ☐ |
| Contacto | 12 | ☐ |
| **TOTAL** | **101** | ☐ |
| Favicon | 6-8 | ☐ |

---

Última actualización: Diciembre 2025
