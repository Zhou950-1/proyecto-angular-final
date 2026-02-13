# Portafolio — Plantilla Angular (Standalone + TypeScript)

Plantilla de portafolio profesional creada con **Angular 21.1.4** y **TypeScript 5.9.2**. Implementa componentes standalone, gestión de estado con localStorage, formularios reactivos tipados y diseño corporativo Memphis.

## ✨ Características Principales

- **Componentes Standalone**: Sin NgModule, arquitectura moderna y modular.
- **Tipado Estricto**: TypeScript con interfaces, sin uso de `any`.
- **Enrutamiento Funcional**: Rutas definidas en `src/app/app.routes.ts` con `RouterOutlet`.
- **localStorage Integrado**: Persistencia de tema (dark/light), proyectos y mensajes de contacto.
- **Formularios Reactivos**: Validación en tiempo real con mensajes de error específicos.
- **Diseño Memphis Corporativo**: Paleta de tonos masculinos (azules #2F6FE0, teales #0EA5A4), gradientes y animaciones.
- **Tema Oscuro/Claro**: Con persistencia en localStorage y transiciones suaves.
- **Accesibilidad (WCAG AA)**: Etiquetas HTML semánticas, ARIA labels, contraste de colores optimizado, navegación por teclado.
- **Responsive**: Diseño mobile-first con media queries.
- **Animaciones**: Efectos pop/bounce en carga, transiciones suaves en tema.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # Navegación + toggle tema
│   │   ├── footer/              # Pie de página
│   │   └── project-card/        # Tarjeta reutilizable
│   ├── pages/
│   │   ├── home/                # Hero section con CTA
│   │   ├── portfolio/           # Grid de proyectos
│   │   └── contact/             # Formulario reactivo
│   ├── services/
│   │   ├── storage.service.ts   # Wrapper tipado sobre localStorage
│   │   └── projects.service.ts  # Caché de proyectos
│   ├── models/
│   │   └── project.model.ts     # Interfaz Project
│   ├── app.ts                   # Componente raíz
│   ├── app.routes.ts            # Definición de rutas
│   ├── app.html                 # Template raíz
│   └── app.scss                 # Estilos raíz
├── styles.scss                  # Estilos globales + CSS variables
├── main.ts                      # Bootstrap
└── index.html                   # HTML principal
```

## 🎨 Diseño y Theming

### Paleta de Colores

**Modo Claro (Light):**
- `--memphis-blue-2`: #2F6FE0 (Azul primario)
- `--memphis-blue-1`: #0EA5A4 (Teal)
- `--memphis-blue-2`: #063E8A (Azul oscuro/accent)
- `--text`: #1a1a1a
- `--muted`: #555555

**Modo Oscuro (Dark):**
- `--text`: #f0f0f0
- `--muted`: #b0b0b0
- `--memphis-accent`: #9C6FD8 (Púrpura)
- `--surface`: #0a0e27 (Fondo oscuro)

Las variables se definen en `src/styles.scss` y se actualizan dinámicamente con el atributo `[data-theme='dark']`.

### Animaciones

- **`iconPop`**: 900ms - ícono de tema en header
- **`memphisPop`**: 1100ms - perfil en hero section
- Todas se ejecutan una sola vez en carga con `animation-fill-mode: both`

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm start
```

El servidor se iniciará en `http://localhost:4200/`. La aplicación se recargará automáticamente con cambios.

### Builds

**Desarrollo:**
```bash
ng serve
```

**Producción:**
```bash
ng build --configuration production
```

Los artefactos se guardan en `dist/proyecto-final-angular/`.

### Tests

```bash
npm test
```

Ejecuta pruebas unitarias con **Vitest**.

## 📋 Detalles de Componentes

### `HeaderComponent`
- Navegación sticky con "Mi Portafolio" (marca).
- Toggle de tema (claro/oscuro) con icono SVG animado.
- Links activos destacados con `routerLinkActive` y `routerLinkActiveOptions`.
- Accesibilidad: `role="navigation"`, `aria-label`, `aria-current="page"`.

### `HomeComponent`
- **Hero Section**: Título, subtítulo, biografía y CTAs ("Ver proyectos", "Contactar").
- **Perfil Animado**: Tarjeta con background gradient y animación `memphisPop`.
- **Background Decorativo**: Pseudo-elemento `::before` con gradient y `border-radius` redondeado.
- Botones estilizados primary y ghost con transiciones y focus visible.

### `PortfolioComponent`
- **Grid Responsivo**: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`.
- Lista de `ProjectCardComponent` con `trackBy` para optimización.
- Texto introductorio sobre proyectos destacados.

### `ProjectCardComponent`
- **Input Moderno**: Usa función `input()` de Angular (en lugar de `@Input()`).
- Muestra imagen (si existe), título, descripción, tags y enlace.
- Hover efecto: traslación vertical y sombra mejorada.
- `rel="noopener noreferrer"` en enlaces externos para seguridad.
- `aria-label` en enlaces para accesibilidad.

### `ContactComponent`
- **Formulario Reactivo**: Validación en tiempo real.
- **Campos**: nombre (required), email (required, email format), mensaje (required, minLength 10).
- **Mensajes de Error**: Se muestran bajo cada input cuando es inválido y touched.
- **Status Message**: `role="status"` con `aria-live="polite"` para feedback de envío.
- Desaparece automáticamente después de 5 segundos.
- Almacena mensajes en `localStorage` bajo clave `contact.messages`.

### `FooterComponent`
- Año dinámico (`new Date().getFullYear()`).
- Semántica HTML5 (elemento `<footer>`).
- Estilos responden a modo oscuro.

## 🔧 Servicios

### `StorageService`
Wrapper tipado sobre `localStorage` con error handling:
- `get<T>(key: string): T | null` — Lee y parsea JSON.
- `set<T>(key: string, value: T)` — Serializa y almacena.
- `remove(key: string)` — Elimina clave.
- Todos los métodos envueltos en try-catch.

### `ProjectsService`
Gestión de proyectos con caché:
- `getProjects(): Project[]` — Retorna proyectos cacheados o inicializa.
- Cachekey: `portfolio.projects`.
- Datos iniciales: 3 proyectos de ejemplo (Dashboard, Gestión de Tareas, E-commerce).

## 📱 Modelos

### `Project`

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
  tags?: string[];
}
```

## ♿ Accesibilidad

- **WCAG AA Compliance**: Contraste de color ≥ 4.5:1 en texto.
- **Formularios**: `<label>` asociadas con `id`, `aria-required`, `aria-invalid`.
- **Navegación**: `role="navigation"`, `aria-label`, `aria-current="page"` en links activos.
- **Buttons**: `aria-label`, `aria-pressed` en toggle de tema.
- **SVG**: `aria-hidden="true"` en iconos decorativos.
- **Status Messages**: `role="status"`, `aria-live="polite"`.
- **Focus Visible**: Outline 2px sólido alrededor de elementos interactivos.
- **Semantic HTML**: `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`.

## 🎯 Mejoras Implementadas (v2.0)

1. ✅ **Importaciones Faltantes**: Agregado `RouterLink` a `HomeComponent`.
2. ✅ **Modernización**: `ProjectCardComponent` ahora usa `input()` en lugar de `@Input()`.
3. ✅ **Accesibilidad Mejorada**:
   - Labels con `for` e `id` en formulario.
   - Mensajes de error dinámicos y específicos.
   - Aria labels mejorados en navegación y botones.
   - Focus styles visibles en todos los interactivos.
   - Newsletter feedback con `role="status"`.
4. ✅ **Estilos Reforzados**:
   - Mejor contraste WCAG AA.
   - Paleta de colores actualizada para dark mode.
   - Transiciones suaves entre temas.
   - Hover y focus effects en botones y links.
   - Diseño responsivo mejorado.
5. ✅ **Contenido Actualizado**:
   - Proyectos dummy con descripciones más realistas.
   - Página de portfolio con intro y descripción.
   - Mensajes claros en footer.
6. ✅ **Type Safety**:
   - Eliminados `null` en favor de `undefined`.
   - Mejor manejo de tipos genéricos.
7. ✅ **UX Mejorada**:
   - Animaciones en hover para tarjetas.
   - Transiciones suaves en tema.
   - Estados visuales claros en formularios.

## 📝 Extensiones Sugeridas

- [ ] Añadir tests unitarios (Vitest) para servicios y componentes.
- [ ] Implementar rutas lazy-loaded para secciones grandes.
- [ ] Añadir imágenes reales en `src/assets/` y actualizarlas en `ProjectsService`.
- [ ] Integrar con un backend para persistencia de mensajes de contacto.
- [ ] Añadir animaciones más complejas (Framer Motion o Angular Animations).
- [ ] Implementar `ChangeDetectionStrategy.OnPush` en componentes para optimización.
- [ ] Añadir analytics (Google Analytics, Mixpanel, etc.).
- [ ] Mejorar SEO con meta tags dinámicos y Open Graph.

## 📚 Tecnologías

- **Angular**: 21.1.4 (Standalone components)
- **TypeScript**: 5.9.2 (Strict mode)
- **SCSS**: Compilado en CSS con variables personalizadas.
- **Vitest**: Testing framework.
- **RxJS**: Reactive programming (usado por Angular).

## 💡 Notas Importantes

- Los temas (claro/oscuro) se persisten en `localStorage` bajo la clave `theme`.
- Los proyectos se cachean en `localStorage` bajo la clave `portfolio.projects`.
- Los mensajes de contacto se almacenan en `localStorage` bajo la clave `contact.messages`.
- **Seguridad**: No almacenar datos sensibles en `localStorage` en producción.

## 📄 Licencia

Este proyecto es una plantilla de demostración. Siéntete libre de adaptarlo a tus necesidades.
