import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import rehypeExternalLinks from "rehype-external-links";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), prefetch(), sitemap()],
  site: "https://julian.pro",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
  },
});