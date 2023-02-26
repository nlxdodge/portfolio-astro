import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const posts = await getCollection("posts", ({ data }) => {
  return data.draft !== true;
});

export function get(context) {
  return rss({
    title: "Posts | Gerben Veenhof",
    description: "A humble Astronaut's guide to the stars",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/post/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
