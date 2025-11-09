import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcopeg.github.io',
  base: '/blog',
  integrations: [react()],
});
