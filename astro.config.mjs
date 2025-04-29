import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://keiver-dev.github.io',
  base: '/Portafolio-v.1.2/',
  integrations: [
    react(),
    tailwind({
      // opcionalmente puedes extender la config de Tailwind aquí
      config: {
        content: [
          './src/**/*.{astro,html,js,jsx,ts,tsx}',
        ],
      },
    }),
  ],
});