import { defineConfig, sharpImageService } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
import remarkToc from "remark-toc";
import purgecss from "astro-purgecss";
import icon from "astro-icon";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://gerbenveenhof.nl/",
  integrations: [
    icon(),
    sitemap(),
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
    partytown(),
    compress(),
    purgecss(),
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
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAccessibleEmojis as any],
  }
});
