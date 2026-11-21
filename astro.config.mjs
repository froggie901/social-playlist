import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://social-playlists.com',
  integrations: [mdx()],
  build: { format: 'file' },
});
