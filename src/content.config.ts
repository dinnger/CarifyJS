import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./docs" }),
});

export const collections = { blog };
