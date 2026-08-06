import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://rinngo01.github.io'
    : 'https://rinngo-lab.vercel.app',
  base: isGitHubPages ? '/rinngo-lab/' : '/',
  trailingSlash: 'ignore',
});
