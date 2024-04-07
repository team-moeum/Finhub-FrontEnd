export function getBaseUrl() {
    if (typeof window !== 'undefined') return '';
    const domain = process.env.VERCEL_URL;
    if (domain) return `https://${domain}`;
    return 'http://localhost:3000';
  }