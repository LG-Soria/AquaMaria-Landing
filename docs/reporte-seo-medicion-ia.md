# Reporte de SEO, medición e IA

## Resumen ejecutivo

Se mejoró la landing principal de AquaMaría en tres frentes: SEO técnico, medición de campañas y legibilidad para agentes de IA. El proyecto usa React + Vite, por lo que los cambios se aplicaron en `index.html`, `public/` y componentes React existentes, sin rediseñar la interfaz.

La landing ahora tiene metadata específica, canonical, Open Graph, Twitter Card, robots, sitemap, JSON-LD, `llms.txt`, una imagen social dedicada, CTAs reales como links cuando llevan a WhatsApp y una capa de tracking configurable por variables de entorno.

## Archivos modificados

- `.env.example`: variables públicas necesarias para dominio y medición.
- `App.tsx`: inicialización de scripts de medición y tracking del botón flotante de WhatsApp.
- `README.md`: documentación de variables, tracking y archivos públicos SEO.
- `components/atoms/Button.tsx`: agregado `ButtonLink` para CTAs que deben ser links reales.
- `components/atoms/Logo.tsx`: mejora de `alt`, `width` y `height`.
- `components/organisms/Hero.tsx`: CTA principal como link real, tracking, alt/dimensiones de imágenes y preload compatible.
- `components/organisms/Navbar.tsx`: tracking de navegación y CTA de WhatsApp como link real.
- `components/organisms/FinalCTA.tsx`: CTA final como link real, copy más específico y tracking.
- `components/organisms/Footer.tsx`: datos centralizados de contacto, tracking de WhatsApp, Instagram y navegación.
- `components/organisms/FAQSection.tsx`: evento `faq_open` y atributos accesibles del acordeón.
- `components/organisms/EquipmentSection.tsx`: alt descriptivos, `loading="lazy"`, `decoding="async"` y dimensiones.
- `components/organisms/InstallationsSection.tsx`: heading más claro, dimensiones y lazy loading.
- `components/organisms/ProblemSection.tsx`: dimensiones, lazy loading y decoding async.
- `components/organisms/SolutionSection.tsx`: ajuste menor de heading.
- `contact.ts`: datos públicos centralizados de marca, dominio, WhatsApp, Instagram y zona de cobertura.
- `index.html`: title, description, canonical, Open Graph, Twitter Card, JSON-LD, preload, preconnect y fallback `noscript`.
- `metadata.json`: descripción alineada con el posicionamiento actual.
- `package.json`: scripts `test` y `typecheck`.
- `public/iconos/site.webmanifest`: `theme_color` alineado con la marca visual.
- `public/images/og-aquamaria.jpg`: imagen 1200x630 para previews sociales.
- `public/robots.txt`: reglas básicas de indexación.
- `public/sitemap.xml`: sitemap de la landing.
- `public/llms.txt`: resumen simple para agentes de IA.
- `tracking.ts`: helpers de analytics, UTMs, eventos y carga dinámica de GA4/GTM/Meta Pixel.
- `tracking.test.ts`: pruebas de extracción UTM y payload de eventos.
- `vite-env.d.ts`: tipos de Vite para `import.meta.env`.

## SEO técnico

Se reemplazó metadata genérica por un `<title>` y description específicos para “agua purificada para empresas y comercios sin bidones”. Se agregó canonical a `https://www.aquamaria.com.ar/`, `meta robots`, `theme-color`, Open Graph y Twitter Card con una imagen social dedicada.

Se agregaron `public/robots.txt` y `public/sitemap.xml`, ambos apuntando al dominio público detectado. También se mantuvo el idioma `lang="es"` y se conservaron los headings con un solo `h1` principal y jerarquía `h2`/`h3` coherente.

Se mejoraron imágenes importantes con `alt`, `width`, `height`, `loading="lazy"` y `decoding="async"` cuando corresponde. La imagen principal del hero se precarga y la imagen social se generó en 1200x630 para previews en WhatsApp, Facebook, LinkedIn y X.

El contenido clave sigue siendo texto HTML renderizado por React. Además, se agregó un fallback `noscript` breve para que la propuesta de valor, cobertura y contacto sean legibles aun sin JavaScript.

## Datos estructurados

Se agregó JSON-LD en `index.html` con un grafo de:

- `Organization`: nombre, URL, logo, Instagram y punto de contacto.
- `WebSite`: sitio principal en español Argentina.
- `Service`: servicio mensual de equipos de agua purificada conectados a red, audiencia y cobertura.
- `WebPage`: landing principal y relación con el servicio.
- `FAQPage`: preguntas y respuestas alineadas con la FAQ visible.

No se agregó `LocalBusiness` porque no hay dirección física publicada en el proyecto. Tampoco se agregó `Product` porque la landing vende un servicio mensual y los equipos aparecen como opciones dentro del servicio, no como productos con precio propio.

## Optimización para agentes de IA

Los cambios ayudan a sistemas conversacionales y agentes de búsqueda porque la entidad queda explícita: AquaMaría, servicio mensual de agua purificada, equipos conectados a red, público objetivo, cobertura, contacto y preguntas frecuentes.

Se agregó `public/llms.txt` con un resumen honesto del negocio, páginas importantes, datos de contacto e instrucciones básicas para agentes. No se presenta como garantía de compatibilidad universal, porque `llms.txt` todavía no es un estándar formal para todos los sistemas.

También se alinearon metadata, contenido visible y JSON-LD para evitar contradicciones entre lo que ve el usuario, lo que leen crawlers tradicionales y lo que pueden extraer sistemas de IA.

## Medición de campañas

Se agregó una implementación configurable por variables de entorno:

- GA4 mediante `VITE_PUBLIC_GA_ID`.
- Google Tag Manager mediante `VITE_PUBLIC_GTM_ID`.
- Meta Pixel mediante `VITE_PUBLIC_META_PIXEL_ID`.

Los scripts se cargan dinámicamente solo si el ID correspondiente está configurado. No se hardcodearon IDs de analytics o publicidad.

Eventos configurados:

- `cta_click`: navegación interna, CTA secundario y links sociales.
- `whatsapp_click`: clicks a WhatsApp.
- `primary_conversion`: conversión principal cuando el usuario sale hacia WhatsApp.
- `faq_open`: apertura de preguntas frecuentes.

CTAs medidos:

- CTA principal del hero.
- CTA secundario “Ver cómo funciona”.
- CTA de WhatsApp en navbar desktop.
- CTA de WhatsApp en menú mobile.
- Botón flotante de WhatsApp.
- CTA final de WhatsApp.
- Link de WhatsApp del footer.
- Link de Instagram del footer.
- Navegación interna de navbar y footer.

Cada evento incluye, cuando aplica, `cta_location`, `cta_text`, `cta_type`, `destination`, `contact_type`, `conversion_type`, `page_path`, `page_location` y parámetros de campaña disponibles.

Los parámetros capturados son:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `gclid`
- `gbraid`
- `wbraid`
- `fbclid`

Para probar eventos:

- Configurar al menos una variable de medición en `.env.local`.
- Abrir la landing con UTMs, por ejemplo `/?utm_source=google&utm_medium=cpc&utm_campaign=test`.
- Hacer click en CTAs.
- Revisar `window.dataLayer` en consola.
- Revisar DebugView de GA4 si `VITE_PUBLIC_GA_ID` está configurado.
- Revisar Tag Assistant si se usa GTM.
- Revisar Meta Pixel Helper si se usa Meta Pixel.

## Variables de entorno necesarias

- `VITE_PUBLIC_SITE_URL`: dominio público del sitio. Valor sugerido actual: `https://www.aquamaria.com.ar`.
- `VITE_PUBLIC_GA_ID`: ID de GA4, por ejemplo `G-XXXXXXXXXX`.
- `VITE_PUBLIC_GTM_ID`: ID de Google Tag Manager, por ejemplo `GTM-XXXXXXX`.
- `VITE_PUBLIC_META_PIXEL_ID`: ID de Meta Pixel.

## Cómo probar

Comandos ejecutados:

- `npm run test`: OK. Ejecuta 2 pruebas de tracking y UTMs.
- `npm run typecheck`: OK.
- `npm run build`: OK. Vite generó `dist/` correctamente.

No se ejecutó `npm run lint` porque el proyecto no tiene script de lint configurado.

Pasos manuales recomendados:

- Abrir la landing y revisar que el diseño se mantenga.
- Inspeccionar `<title>`, description, canonical, Open Graph y Twitter Card.
- Probar el CTA principal de WhatsApp.
- Abrir la consola y revisar `window.dataLayer` después de clicks.
- Probar una URL con UTMs y confirmar que los eventos los incluyen.
- Revisar `https://www.aquamaria.com.ar/robots.txt`.
- Revisar `https://www.aquamaria.com.ar/sitemap.xml`.
- Revisar `https://www.aquamaria.com.ar/llms.txt`.
- Validar JSON-LD con Rich Results Test o Schema Markup Validator.
- Probar preview social con Sharing Debugger de Meta, LinkedIn Post Inspector y herramientas de card preview de X.

## Pendientes o datos faltantes

- Confirmar que `https://www.aquamaria.com.ar/` es la URL final de producción definitiva.
- Cargar el ID real de GA4.
- Cargar el ID real de GTM si se va a usar Tag Manager.
- Cargar el ID real de Meta Pixel si se van a medir campañas de Meta.
- Definir si habrá página de privacidad/cookies para informar el uso de analytics y píxeles.
- Confirmar redes sociales oficiales adicionales, si existen.
- Confirmar dirección física, si se quiere evaluar `LocalBusiness`.
- Confirmar email comercial, si existe.
- Confirmar si el número visible también debe usarse como link telefónico `tel:`.
- Revisar textos legales o comerciales finales antes de pauta.
- Reemplazar o comprimir imágenes pesadas de equipos e instalaciones para mejorar performance.

## Recomendaciones finales

- Registrar el dominio en Google Search Console y enviar el sitemap.
- Configurar conversiones en GA4 o GTM usando `primary_conversion` y `whatsapp_click`.
- Usar UTMs consistentes en campañas pagas.
- Validar eventos antes de activar campañas con presupuesto real.
- Mantener FAQ y JSON-LD sincronizados cuando cambien textos.
- Actualizar `lastmod` del sitemap en cambios importantes.
- Migrar Tailwind CDN a una build local si el sitio va a escalar en tráfico orgánico o campañas, porque el CDN de Tailwind no es ideal para producción.
- Considerar pre-render o SSR si SEO orgánico pasa a ser un canal crítico, ya que Vite SPA depende de JavaScript para renderizar el contenido completo visible.
