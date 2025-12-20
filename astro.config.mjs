import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import webmanifest from 'astro-webmanifest';
import compress from 'astro-compress';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://castrohomebuilders.com',
  integrations: [
    robotsTxt(),
    sitemap(),
    tailwind(),
    webmanifest({
      name: 'Castro Home Builders',
      icon: 'public/chb-favicon-light.png',
      description:
        'Castro Home Builders is a general contracting company operating in the Bay Area with over 20 years of experience',
      start_url: '/',
    }),
    compress(),
    alpinejs(),
  ],
});
