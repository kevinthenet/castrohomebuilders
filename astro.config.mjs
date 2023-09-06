import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://castrohomebuilders.com",
  integrations: [robotsTxt(), sitemap(), tailwind(), compress()]
});
