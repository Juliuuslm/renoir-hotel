# Estructura de Imágenes

Esta carpeta contiene las imágenes locales para cada sección del sitio Hotel Renoir.

## Estructura de carpetas:

```
images/
├── favicon/              # Iconos del sitio
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── ...
├── hero/                 # Imágenes de sección Hero
│   ├── hotel-exterior.jpg
│   ├── lobby.jpg
│   └── ...
├── suites/               # Imágenes de Suites/Habitaciones
│   ├── atelier-suite.jpg
│   ├── impressionist-suite.jpg
│   ├── deluxe-room-1.jpg
│   └── ...
├── gastronomia/          # Imágenes de Restaurante/Gastronomía
│   ├── restaurant-main.jpg
│   ├── chef-special.jpg
│   ├── wine-selection.jpg
│   └── ...
├── wellness/             # Imágenes de Spa/Wellness
│   ├── spa-entrance.jpg
│   ├── treatment-room.jpg
│   ├── sauna.jpg
│   └── ...
├── experiencias/         # Imágenes de Experiencias y Eventos
│   ├── wine-tasting.jpg
│   ├── cooking-class.jpg
│   ├── art-workshop.jpg
│   └── ...
└── contact/              # Imágenes de página de Contacto
    ├── map-location.jpg
    ├── reception.jpg
    └── ...
```

## Requisitos de imágenes:

### Formato:
- **Formatos recomendados**: JPG/JPEG (fotografías), PNG (gráficos con transparencia)
- **Compresión**: Optimizar antes de subir
- **Responsive**: Incluir versiones de diferentes tamaños

### Tamaños recomendados:

**Hero Section:**
- Ancho: 2070px (para 2x retina)
- Altura: 1080px - 1440px
- Aspecto: 16:9 o 4:3

**Suites/Rooms:**
- Ancho: 1200px - 2000px
- Altura: 800px - 1500px
- Aspecto: Variable (retratos o paisajes)

**Gastronomía:**
- Ancho: 1200px - 2000px
- Altura: 800px - 1500px
- Aspecto: Variable

**Wellness:**
- Ancho: 1200px - 2000px
- Altura: 800px - 1500px
- Aspecto: Variable

**Experiencias:**
- Ancho: 800px - 1200px
- Altura: 600px - 1000px
- Aspecto: Variable

## Notas sobre optimización:

- Las imágenes se optimizan automáticamente mediante `next/image` loader personalizado
- Mobile: 70% quality, máximo 750px de ancho
- Desktop: 80% quality, ancho completo
- Formato WebP se utiliza en navegadores que lo soportan
