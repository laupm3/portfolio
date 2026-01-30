# Deploy del portfolio

## Vercel (recomendado)

1. **Sube el código a GitHub** (si no está ya)
   - Haz commit y push de todos los cambios desde GitHub Desktop.

2. **Entra en Vercel**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de **GitHub**.

3. **Importar proyecto**
   - Clic en **Add New…** → **Project**.
   - Elige el repositorio **portfolio** (o el nombre que tenga tu repo).
   - Si no aparece, autoriza a Vercel para ver los repos de GitHub.

4. **Configuración (Vercel la rellena solo)**
   - **Framework Preset:** Vite (debería detectarlo).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
   - No cambies nada salvo que sepas lo que haces.

5. **Deploy**
   - Clic en **Deploy**.
   - En 1–2 minutos tendrás una URL tipo: `portfolio-xxx.vercel.app`.

6. **Dominio**
   - En el dashboard del proyecto: **Settings** → **Domains**.
   - Puedes usar el subdominio que te dan o añadir uno propio.

---

## Netlify (alternativa)

1. Ve a [netlify.com](https://netlify.com) e inicia sesión con GitHub.
2. **Add new site** → **Import an existing project** → **GitHub** → elige tu repo.
3. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy site**.

---

## Después del deploy

- Cada **push a `main`** en GitHub generará un nuevo deploy en Vercel/Netlify.
- Pon la URL del portfolio en tu README, LinkedIn y en la sección Contacto si quieres.
