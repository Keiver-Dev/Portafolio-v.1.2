import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: '/Portafolio-V.1.2/',
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