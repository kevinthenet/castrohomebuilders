import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import webmanifest from 'astro-webmanifest';
import compress from 'astro-compress';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://castrohomebuilders.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    robotsTxt(),
    sitemap(),
    webmanifest({
      name: 'Castro Home Builders',
      icon: 'public/chb-favicon-light.png',
      description:
        'Castro Home Builders is a general contracting company operating in the Bay Area with over 20 years of experience',
      start_url: '/',
    }),
    compress({
      // csso silently drops modern `@media (width>=...)` range syntax that
      // Astro 7's build pipeline now emits, stripping all responsive styles.
      CSS: false,
    }),
    alpinejs(),
  ],
});
