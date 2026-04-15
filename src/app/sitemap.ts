import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://traduceriurgenteauto.ro'; 

  return [
    // 1. Pagina principală (Home)
    {
      url: `${baseUrl}/`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, 
    },
    // 2. Pagina de Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 0.8, 
    },
    // 3. Pagina Despre noi (About)
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly', // Nu se schimbă foarte des
      priority: 0.8, 
    },
  ];
}