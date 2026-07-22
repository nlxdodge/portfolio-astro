import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig, sharpImageService } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import remarkToc from "remark-toc";
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: "https://gerbenveenhof.nl/",
  integrations: [
    icon(),
    robotsTxt(),
    mdx({
      shikiConfig: {
        theme: "one-dark-pro",
        themes: {
          light: "one-light",
          dark: "one-dark-pro",
        },
      },
    }),
    mermaid({
      theme: 'forest',
      autoTheme: true
    }),
    sitemap(),
    partytown(),
    compress(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/src/styles/globals" as *;',
        },
      },
    },
  },
  image: {
    service: sharpImageService(),
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeAccessibleEmojis as any],
    }),
  },
  redirects: {
    "/posts": "/posts/1",
  },
});
