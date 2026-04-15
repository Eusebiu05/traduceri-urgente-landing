import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Regula se aplică pentru toți roboții (Google, Bing, Yahoo etc.)
      allow: '/',     // Le permiți accesul pe întregul site
      // disallow: '/admin/', -> Aici ai pune paginile pe care vrei să le ascunzi
    },
    // Când vei urca site-ul online și vei avea un domeniu, e bine să pui calea către sitemap aici:
    // sitemap: 'https://www.traduceriurgenteauto.ro/sitemap.xml',
  };
}