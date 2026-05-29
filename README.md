**AquaMaria - Purificacion Premium**
- Landing page en React, Vite y TypeScript para alquilar dispensers y filtros de agua de red sin bidon ni logistica de botellones.
- Diseno mobile-first con utilidades Tailwind cargadas por CDN y tipografia Plus Jakarta Sans.
- Arquitectura de componentes (atoms, molecules, organisms) que separa UI basica de secciones completas: Hero, ProblemSection, SolutionSection, HowItWorks, RentalIncludes, BenefitsSection, EquipmentSection, FAQSection, FinalCTA, Navbar y Footer.
- CTA principal y boton flotante apuntan a WhatsApp para contacto inmediato.


**Requisitos**
- Node 18+ y npm.

**Configuracion rapida**
- Instalar dependencias: `npm install`
- Desarrollo: `npm run dev` (Vite en puerto 3000, host 0.0.0.0)
- Build de produccion: `npm run build`
- Vista previa del build: `npm run preview`

**Medicion y SEO**
- Copiar `.env.example` a `.env.local` y completar los IDs publicos de medicion si se usan GA4, GTM o Meta Pixel.
- Variables disponibles: `VITE_PUBLIC_SITE_URL`, `VITE_PUBLIC_GA_ID`, `VITE_PUBLIC_GTM_ID`, `VITE_PUBLIC_META_PIXEL_ID`.
- `public/robots.txt`, `public/sitemap.xml` y `public/llms.txt` se publican junto con el build.

**Estructura breve**
- `App.tsx`: arma la landing y el boton flotante de WhatsApp.
- `components/`: atoms, molecules y organisms.
- `index.html`: carga Tailwind CDN, fuente Plus Jakarta Sans e import map para modulos.
- `vite.config.ts`: alias `@` hacia la raiz y config de servidor.
- `types.ts`: tipos compartidos para productos, planes y asesor.

**Notas**
- Numero de WhatsApp actual: `5491165532832` (editar en `contact.ts` si cambia).
- Imagenes principales se sirven desde `public/images`; revisar peso y dimensiones si se reemplazan assets.
