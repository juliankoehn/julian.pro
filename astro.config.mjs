import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://julian.pro',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});