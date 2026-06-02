# Dangelo Aguilar | Portfolio

Bienvenido al repositorio de mi portafolio personal. Este proyecto es una carta de presentación interactiva, optimizada y diseñada para impresionar desde el primer vistazo. Construida con tecnologías modernas y principios de arquitectura limpia (SOLID).

## 🚀 Tecnologías Utilizadas

- **Vite:** Herramienta de compilación (bundler) ultrarrápida, utilizada para estructurar el proyecto y compilarlo en archivos estáticos listos para desplegar en GitHub Pages.
- **TypeScript:** Utilizado para implementar lógica tipada, segura y mantenible (como el sistema de traducciones y el juego interactivo).
- **Tailwind CSS:** Framework de utilidades CSS empleado para construir un diseño premium sin escribir archivos CSS gigantescos.
- **HTML5 & CSS3:** Estructura semántica pura, mejorada con propiedades modernas.

## 🎨 Diseño y UI ("WOW Factor")

El diseño fue concebido para transmitir profesionalismo y un toque moderno ("Hacker/Developer aesthetic"):

- **Glassmorphism:** Uso de paneles translúcidos con desenfoque (blur) sobre un fondo oscuro para crear una sensación de profundidad.
- **Dark Mode Premium:** Paleta de colores basada en grises azulados profundos (`#0f172a`), con acentos vibrantes en cian y violeta (`#38bdf8`, `#818cf8`).
- **Tipografía de Consola:** Integración de la fuente **Fira Code** para darle a toda la interfaz un estilo de terminal de programación.
- **Micro-interacciones:** Animaciones suaves de aparición (`fade-in`, `slide-up`), transiciones al pasar el ratón por encima de los botones e iconos SVG premium.

## ✨ Características Principales

1. **Internacionalización Dinámica (i18n):**
   - Traducción instantánea entre Español e Inglés mediante un `I18nManager` personalizado, sin recargar la página.
   - Modifica los archivos en `public/locales/` para editar los textos.

2. **Terminal Interactiva (Easter Egg):**
   - Incluye una sección de terminal ejecutable donde el reclutador puede jugar una partida del clásico **Snake** (`snake.exe`) mientras revisa mi experiencia. Todo renderizado en un HTML5 Canvas puro controlado por TypeScript.

3. **Arquitectura Limpia (SOLID):**
   - **Data Separada:** La información de los proyectos está aislada en `src/data/projects.ts` para fácil actualización sin tocar el DOM o la UI principal.
   - **Core Independiente:** La lógica (como traducciones y la máquina del juego) está aislada en `src/core/`.

4. **100% Responsivo:**
   - Perfectamente adaptado a pantallas de móviles, tablets y monitores grandes utilizando un sistema de grillas y flexbox con Tailwind.

5. **Exportación Nativa a PDF:**
   - Archivos de Currículum en Markdown previamente convertidos a PDF mediante scripts (PhantomJS/Puppeteer) e integrados dinámicamente con el botón "Descargar CV" según el idioma seleccionado.

## ⚙️ Instalación y Uso Local

Asegúrate de tener **Node.js** instalado en tu computadora (Versión recomendada: 20+).

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/djdangelo/portfolio.git
   cd portfolio
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Correr el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   *La aplicación estará disponible típicamente en `http://localhost:5173`.*

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado con rutas relativas (`base: './'`) para funcionar sin problemas en GitHub Pages.

1. Construye el proyecto para producción:
   ```bash
   npm run build
   ```
2. Sube el contenido de la carpeta `/dist` a tu repositorio en la rama `gh-pages` (o configúralo desde la rama principal en los ajustes de tu repositorio).

---
*Desarrollado con pasión por [Dangelo Aguilar](https://linkedin.com/in/dangelo-aguilar).*
