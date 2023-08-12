import { defineConfig, sharpImageService } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://gerbenveenhof.nl/',
  integrations: [sitemap(), robotsTxt(), compress(), mdx()],
  vite: {
    ssr: {
      noExternal: ['include-media']
    }
  },
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService(),
  },
});