export function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  const domain = process.env.NEXT_PUBLIC_FRONT_URL;
  if (domain) return `https://${domain}`;
  return "http://localhost:3000";
}
