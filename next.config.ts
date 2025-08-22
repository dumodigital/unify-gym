import type { NextConfig } from 'next';

const securityHeaders = [
  // Content Security Policy (tweak if you add new domains)
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src https://www.google.com https://www.youtube.com",
      "media-src 'self' blob: data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ')
  },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  compress: true,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|js|css|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      }
    ];
  }
};

export default nextConfig;