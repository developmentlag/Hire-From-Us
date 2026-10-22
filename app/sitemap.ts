import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devopsmumbai.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/hire-from-us',
    '/freshers',
    '/experienced',
    '/L1-support-candidates',
    '/L2-support-candidates',
    '/cloud-support-candidates',
    '/devops-engineer-candidates',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));
}
