// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://xv-nicole-test.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
