/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://unifygym.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => [
    {
      loc: '/services/boxing',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/pilates',
      changefreq: 'weekly', 
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/personal-training',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/services/chiropractic',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ],
  transform: async (config, path) => {
    // Custom priority based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/services/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/membership' || path === '/trainers') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/admin',
      },
    ],
    additionalSitemaps: [
      'https://unifygym.com/sitemap.xml',
    ],
  },
};
