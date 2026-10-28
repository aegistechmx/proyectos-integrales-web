# Proyectos Integrales — sitio web

Sitio de presentación creado con React + Vite, con diseño adaptable a móvil y escritorio.

## Requisitos
- Node.js 20 o superior recomendado
- npm

## Ejecutar localmente
```bash
npm install
npm run dev
```
Vite mostrará la dirección local para previsualizar el sitio.

## Crear la versión de producción
```bash
npm run build
```
El resultado se genera en `dist/`.

## Publicar en Cloudflare Pages
1. Sube este proyecto a un repositorio de GitHub.
2. En Cloudflare, abre **Workers & Pages** y crea una aplicación de Pages conectada a Git.
3. Selecciona el repositorio.
4. Configura:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Guarda y despliega. Cloudflare te dará una URL pública.

## Antes de publicarlo
- Confirma que tienes autorización para usar nombres, imágenes y referencias de clientes o proyectos.
- Verifica que los servicios descritos correspondan a los que ofreces actualmente.
- Revisa el correo y teléfono de contacto.
- Añade el logotipo oficial en SVG/PNG si deseas sustituir el monograma tipográfico provisional.
- El formulario comercial aún no está conectado a un backend; el botón de contacto abre un correo nuevo.

## Personalización
- Contenido y secciones: `src/main.jsx`
- Estilos: `src/styles.css`
- Metadatos del sitio: `index.html`
