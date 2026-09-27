# Evidencias y plan de entregas

Este proyecto implementa la aplicación Front-end solicitada en las orientaciones actualizadas de agosto de 2026.

## Entrega 1 — Maquetación

Vistas diseñadas: Home, catálogo de noticias, detalle, favoritos, gestión y contacto. La jerarquía visual se implementa con Bootstrap, una escala tipográfica editorial, tarjetas, estados vacíos, CTA y diseño responsive. Para completar la evidencia académica se deben adjuntar mockups exportados desde Figma (desktop y móvil) dentro del informe APA.

## Entrega 2 — Prototipo funcional

- Carga inicial desde `src/assets/data/news.json`.
- Renderizado dinámico mediante componentes Angular y binding.
- Favoritos persistidos en `localStorage`.
- Formularios con campos obligatorios, correo válido y confirmación.
- Código separado en componentes, páginas, servicios y modelo.
- Repositorio GitHub pendiente de asociar con la cuenta del estudiante.

## Entrega 3 — Aplicación final

- Angular standalone con rutas para las seis vistas.
- Mini-CRUD local para crear y eliminar noticias.
- Bootstrap y Bootstrap Icons.
- Compilación de producción con `npm run build`.
- La URL pública debe añadirse después de desplegar en Netlify, Vercel o GitHub Pages.
- El informe APA debe incluir tabla de contenido, descripción técnica, referentes bibliográficos, conclusiones, URL del repositorio y URL del despliegue.
- El video explicativo de máximo tres minutos debe grabarse y enlazarse desde el informe.

## Ejecución y despliegue

```bash
npm install
npm start
npm run build
```

El directorio publicable generado es `dist/news-platform`.
