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

**Estructura breve**
- `App.tsx`: arma la landing y el boton flotante de WhatsApp.
- `components/`: atoms, molecules y organisms.
- `index.html`: carga Tailwind CDN, fuente Plus Jakarta Sans e import map para modulos.
- `vite.config.ts`: alias `@` hacia la raiz y config de servidor.
- `types.ts`: tipos compartidos para productos, planes y asesor.

**Notas**
- Numero de WhatsApp actual: `5491165532832` (editar en `App.tsx` y `components/organisms/FinalCTA.tsx` si cambia).
- Imagenes y video se sirven desde URLs publicas (Unsplash/Mixkit); cambia las rutas si necesitas assets propios.
