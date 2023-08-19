import { SandboxOptions } from '@/constant/SandboxData';
export default async function sitemap() {
  const baseUrl = 'https://www.next13-template.com';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/sandbox`, lastModified: new Date() },
    ...SandboxOptions.map((option) => ({
      url: `${baseUrl}/sandbox/${option.link}`,
      lastModified: new Date(),
    })),
  ];
}
