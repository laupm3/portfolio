# Portfolio · Laura Prieto

Portfolio personal como Frontend Developer. Desarrollado con React, Vite y Tailwind CSS.

## Stack

- **React** + **Vite**
- **Tailwind CSS** (v3)
- **Framer Motion** (animaciones)
- Deploy en **Vercel**

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/   (Container)
│   ├── sections/ (Hero, About, Skills, Projects, Contact)
│   └── ui/       (Navbar)
├── data/         (projects.js, skills.js)
├── pages/        (Home.jsx)
├── App.jsx
└── main.jsx
```

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build para producción    |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Ejecutar ESLint         |

## Deploy

El proyecto está preparado para Vercel. Cada push a la rama `main` genera un deploy automático.

---

**Laura Prieto** · Frontend Developer
