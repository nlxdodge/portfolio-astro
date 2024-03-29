import { defineConfig, sharpImageService } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
import remarkToc from 'remark-toc';
import purgecss from "astro-purgecss";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://gerbenveenhof.nl/',
  integrations: [icon(), sitemap(), robotsTxt(), compress(), mdx(), partytown(), purgecss()],
  vite: {
    ssr: {
      noExternal: ['include-media']
    },
    css: {
      preprocessorOptions: {
        scss: {
          // this is required so that we don't need to import the globals every time
          additionalData: '@use "/src/styles/globals.scss" as *;'
        }
      }
    }
  },
  image: {
    service: sharpImageService()
  },
  markdown: {
    remarkPlugins: [remarkToc],
  },
  redirects: {
    '/posts': '/posts/1',
    '/post': '/posts/1',
    '/work': '/works'
  }
});