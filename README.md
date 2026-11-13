# Sitio web de IMECC

Sitio de una sola página para **Instalaciones y Materiales Eléctricos y de Construcción Castillo (IMECC)**, La Paz, Honduras.

## Cómo correrlo

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abra la dirección que muestra la terminal (normalmente http://localhost:5173).

Para generar la versión lista para publicar:

```bash
npm run build     # crea la carpeta dist/
npm run preview   # prueba la versión de dist/
```

La carpeta `dist/` se puede subir a cualquier hosting estático (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Estructura

| Archivo | Qué contiene |
| --- | --- |
| `index.html` | Todo el contenido: secciones Nosotros, Servicios, Experiencia, Cuadrillas, Clientes y Contacto |
| `src/style.css` | Estilos. Los colores de marca están al inicio, en `:root` |
| `src/main.js` | Menú móvil y formulario que abre WhatsApp con el mensaje |
| `public/img/logo.png` | Logo completo |
| `public/img/logo-icon.png` | Ícono del logo (usado en la cabecera) |
| `public/favicon.png` | Ícono de la pestaña del navegador |

## Datos de contacto en el sitio

- Contacto: José Amilcar Castillo Castillo
- Celular y WhatsApp: +504 8836-6201
- Teléfono fijo: +504 2774-0914
- Correo: imecc.hn@gmail.com
- Oficina: Plaza Montecristo, Local #6, Barrio San Antonio, La Paz, La Paz

Para cambiar el número de WhatsApp, busque `50488366201` en `index.html` y `src/main.js`.
