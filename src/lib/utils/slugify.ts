import { slug } from "github-slugger";

// slugify
export const slugify = (content: string) => {
  return slug(content);
};