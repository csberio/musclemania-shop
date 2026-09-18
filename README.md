# Muscle Mania PR — Catálogo

Catálogo estático de productos de detailing construido con Astro. Los visitantes pueden buscar, filtrar, seleccionar productos y cantidades, y enviar su lista por WhatsApp para confirmar disponibilidad.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

La salida estática se genera en `dist/` y puede publicarse en Cloudflare Pages, Vercel o cualquier hosting de archivos estáticos.

## Actualizar el catálogo

Los productos están definidos en `src/data/products.ts`. El campo `price` se conserva para administración interna, pero no se renderiza ni se incluye en el JavaScript público.

Para reemplazar una foto, guarda el nuevo archivo en `public/assets/products/` y actualiza la propiedad `image` del producto. Las imágenes de demostración incluyen su procedencia en `IMAGE-SOURCES.md`; deben reemplazarse por material aprobado por el fabricante o suplidor antes de una publicación comercial definitiva.

## Configuración

- WhatsApp: `src/data/site.ts`
- Dominio canónico: `astro.config.mjs`
- Colores y tipografía: `src/styles/global.css`
