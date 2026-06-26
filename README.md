# Prototipo de experiencia del paciente

Aplicación web mobile-first desarrollada con React, TypeScript, Vite y Tailwind CSS. El prototipo recoge PREMs posteriores a la atención y utiliza datos ficticios con fines demostrativos.

## Requisitos

- Node.js 22 LTS o compatible
- npm 10 o compatible

## Desarrollo local

```bash
npm ci
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

## Compilación de producción

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`. No edite manualmente esa carpeta.

## Despliegue en GitHub Pages

El repositorio incluye `.github/workflows/deploy-pages.yml`. Cada `push` a la rama `main` instala las dependencias, compila el proyecto y publica `dist/` mediante GitHub Actions.

En GitHub:

1. Cree un repositorio y suba todo el contenido del proyecto.
2. Verifique que la rama principal se llame `main`.
3. Abra **Settings > Pages**.
4. En **Build and deployment > Source**, seleccione **GitHub Actions**.
5. Abra la pestaña **Actions** y confirme que el flujo **Deploy GitHub Pages** finalice correctamente.
6. Acceda a la URL indicada por el job de despliegue.

## Consideraciones

- `vite.config.ts` usa `base: './'` para generar rutas relativas compatibles con GitHub Pages, incluso cuando la web se publica dentro de `/nombre-del-repositorio/`.
- La aplicación no utiliza un router basado en URL; por ello no requiere una página `404.html` especial.
- La fuente Inter se obtiene desde Google Fonts. Si el dispositivo está sin conexión o la red la bloquea, se utilizará la fuente alternativa definida en CSS.
- El guardado temporal usa `localStorage`; no existe backend ni persistencia remota.
- El número de referencia de demostración no representa un registro clínico real.
