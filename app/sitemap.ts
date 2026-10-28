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
    '/application-support-candidates',
    '/desktop-support-candidates',
    '/l1-it-support-candidates',
    '/it-infrastructure-candidates',
    '/linux-administrator-candidates',
    '/noc-monitoring-candidates',
    '/network-engineer-l1-candidates',
    '/server-administrator-candidates',
    '/service-desk-candidates',
    '/soc-security-analyst-candidates',
    '/cloud-engineer-candidates',
    '/websphere-administrator-candidates',
    '/mlops-dataops-candidates',
    '/database-administrator-candidates',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));
}
