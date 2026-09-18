import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shop.musclemaniapr.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
