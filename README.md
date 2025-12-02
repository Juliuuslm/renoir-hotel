# 🏨 Renoir Hotel - Sitio Web de Lujo

Sitio web premium para Hotel Renoir, un hotel boutique de lujo en Ciudad de México. Desarrollado con Next.js 14, TypeScript, Tailwind CSS, GSAP y Lenis.

## ✨ Características

- 🎨 **Diseño Premium**: Estética minimalista de lujo inspirada en galerías de arte
- ⚡ **Performance Optimizado**: Static Site Generation (SSG) con Next.js 14
- 🎭 **Animaciones Fluidas**: GSAP ScrollTrigger + Lenis smooth scrolling
- 📱 **Totalmente Responsive**: Mobile-first design
- ♿ **Accesible**: Semantic HTML y ARIA labels
- 🔍 **SEO Optimizado**: Metadata completa, structured data y sitemap
- 🎯 **TypeScript**: Type-safe development

## 🛠️ Stack Técnico

- **Framework**: Next.js 14.2+ (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS v3.4
- **Animaciones**: GSAP 3.12 + Lenis 1.3
- **Iconos**: Lucide React
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Package Manager**: pnpm

## 📁 Estructura del Proyecto

```
renoir2.0-hotel/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout root con providers
│   ├── page.tsx                 # Home page
│   ├── suites/page.tsx          # Habitaciones
│   ├── gastronomia/page.tsx     # Restaurantes
│   ├── wellness/page.tsx        # Spa & Wellness
│   ├── experiencias/page.tsx    # Eventos y actividades
│   ├── contacto/page.tsx        # Contacto
│   └── globals.css              # Estilos globales
├── components/
│   ├── shared/                  # Componentes globales
│   │   ├── Navbar.tsx           # Navegación principal
│   │   ├── Footer.tsx           # Footer
│   │   ├── BookingModal.tsx     # Modal de reservas
│   │   ├── MenuModal.tsx        # Modal de menú
│   │   └── SmoothScrollProvider.tsx
│   ├── ui/                      # Componentes UI reutilizables
│   │   ├── Modal.tsx
│   │   ├── RevealText.tsx       # Animación de reveal
│   │   └── ParallaxImage.tsx    # Efecto parallax
│   └── pages/                   # Componentes por página
│       ├── suites/RoomCard.tsx
│       ├── gastronomia/VenueSection.tsx
│       ├── wellness/TreatmentItem.tsx
│       ├── experiencias/EventCard.tsx
│       └── contacto/ContactForm.tsx
├── hooks/
│   ├── useScrollAnimation.ts    # GSAP ScrollTrigger
│   └── useSmoothScroll.ts       # Lenis integration
├── lib/
│   └── modal-context.tsx        # Context API para modales
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/                  # Assets de imágenes
└── types/
    └── index.ts                 # TypeScript types
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- pnpm 8+

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd renoir2.0-hotel

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

### Scripts Disponibles

```bash
pnpm dev       # Servidor de desarrollo
pnpm build     # Build para producción
pnpm start     # Servidor de producción
pnpm lint      # Linter ESLint
```

## 🎨 Páginas

### 1. Home (`/`)
- Hero fullscreen con animación de carga
- Sección intro con RevealText
- Preview de habitaciones

### 2. Suites (`/suites`)
- Hero con imagen de cama
- 3 tipos de habitaciones:
  - The Atelier ($450 USD)
  - Impressionist Suite ($680 USD)
  - Renoir Penthouse ($1,200 USD)
- RoomCard component con layout alternado

### 3. Gastronomía (`/gastronomia`)
- L'Orangerie (desayunos y almuerzos)
- Le Noir (cenas y cocktails)
- Variantes light/dark theme

### 4. Wellness (`/wellness`)
- Hero con tema spa
- 4 tratamientos principales
- Facilities: Mindfulness, Fitness, Membresía

### 5. Experiencias (`/experiencias`)
- Agenda cultural con eventos
- Concierge picks (gemas ocultas)
- Ateliers creativos

### 6. Contacto (`/contacto`)
- Formulario con validación
- Información de contacto
- FAQ rápido

## 🎭 Sistema de Animaciones

### GSAP ScrollTrigger
```typescript
// Hook personalizado para reveals
const ref = useScrollAnimation({
  delay: 0.2,
  yOffset: 48
});
```

### Lenis Smooth Scroll
```typescript
// Integrado globalmente en layout
<SmoothScrollProvider>
  {children}
</SmoothScrollProvider>
```

## 🎨 Tema y Colores

- **Primary**: Neutral (50-900)
- **Accent**: Yellow (500-600)
- **Spa Theme**: Stone (100-900)
- **Fonts**:
  - Serif: Playfair Display
  - Sans: Inter

## 📦 Build para Producción

```bash
pnpm build
```

El build generará:
- Archivos estáticos en `/out`
- Optimización automática de imágenes
- Code splitting por ruta
- Minificación de CSS/JS

### Bundle Size
- First Load JS: ~87.3 kB (compartido)
- Páginas individuales: 2.75 - 4.5 kB

## 🔍 SEO

- ✅ Metadata completa en cada página
- ✅ OpenGraph y Twitter Cards
- ✅ Structured Data (JSON-LD) para Schema.org
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML5

## 🌐 Deploy

El proyecto está configurado para static export (`output: 'export'`).

### Opciones de Hosting:
- Vercel (recomendado)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Cualquier CDN o hosting estático

### Deploy a Vercel:
```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

## 📝 Notas Importantes

### Imágenes
- Actualmente usando URLs de Unsplash
- Para producción: descargar imágenes a `/public/images`
- Actualizar rutas en componentes

### Forms
- Formulario de contacto con validación client-side
- Para producción: integrar con servicio de email (SendGrid, etc.)
- Modales de reserva: integrar con sistema de reservas real

### Analytics
- Agregar Google Analytics o similar
- Tracking de conversiones en botones de reserva

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios en español (`git commit -m 'Añadir nueva característica'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto fue creado para Hotel Renoir.

## 🙏 Créditos

- Diseño inspirado en hoteles boutique de lujo
- Imágenes: Unsplash (temporales)
- Desarrollado con Claude Code

---

**Desarrollado con ❤️ usando Next.js 14 y TypeScript**
