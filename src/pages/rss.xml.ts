import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const posts = await getCollection("posts", ({ data }) => {
  const isDev = import.meta.env.DEV;
  return data.draft !== true || isDev;
});

const sortedPosts = posts.toSorted((first, second) =>
  first.data.date < second.data.date ? 1 : -1,
);

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("Missing site configuration");
  }
  return rss({
    title: "Gerben Veenhof",
    description: "My programming and coding odyssey",
    site: site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      link: `/post/${post.id}/`,
      pubDate: post.data.date,
      description: post.data.description,
    })),
    customData: `<language>en-us</language>`,
  });
};
