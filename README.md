# 🎬 CineSpoilers

E-commerce de contenido exclusivo de cine, construido con React + TypeScript + Vite.

---

## Integrantes
- Eduardo Quiquia Soto

## Stack

- **React 18** + **TypeScript** — UI y tipado estático
- **Vite** — Build tool moderno y rápido
- **Tailwind CSS v4** — Estilos por utilidades
- **Zustand** — Estado global del carrito
- **React Router v6** — Navegación
- **Stripe** — Pasarela de pagos
- **Lucide React** + **React Hot Toast** — Iconos y notificaciones

---

## Paso 1 — Setup del proyecto

### 1. Verificación de entorno

![](docs/lab9/Captura%20de%20pantalla%202026-05-13%20164346.png)

### 2. Creación del proyecto con Vite

```bash
npm create vite@latest cine-spoilers -- --template react-ts
cd cine-spoilers
npm install
```

![](docs/lab9/Captura%20de%20pantalla%202026-05-13%20164628.png)

### 3. Proyecto ejecutado por primera vez

```bash
npm run dev
```

![](docs/lab9/Captura%20de%20pantalla%202026-05-13%20165247.png)

### 4. Inicialización del repositorio

```bash
git init
git add .
git commit -m "feat: initial project setup with Vite + React + TypeScript + Tailwind"
```

<!-- Captura: git log mostrando el primer commit -->

### 5. Modificación de App.tsx

Se reemplazó el contenido de demo por el nombre del proyecto.

![](docs/lab9/Captura%20de%20pantalla%202026-05-13%20170747.png)

### 6. Limpieza del proyecto base

Se eliminaron los archivos de demo que genera Vite (`App.css`, `react.svg`, `vite.svg`) y se limpió `index.css` dejando solo el import de Tailwind.

![](docs/lab9/Captura%20de%20pantalla%202026-05-13%20171232.png)

### 7. Primer componente creado

![](docs/lab9/Captura%20de%20pantalla%202026-05-13%20172032.png)