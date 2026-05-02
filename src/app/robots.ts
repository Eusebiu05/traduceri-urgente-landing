import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/termeni-si-conditii',
        '/politica-de-confidentialitate',
        '/politica-cookies'
      ],
    },

    sitemap: 'https://www.traduceriurgenteauto.ro/sitemap.xml',
  };
}