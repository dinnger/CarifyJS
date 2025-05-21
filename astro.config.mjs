// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";
import remarkAlert from "./src/plugins/markdown_alert/index.ts";
import { mermaid } from "./src/plugins/markdown_mermaid/index.ts";
import remarkToc from "remark-toc";
import { remarkCodeTitle } from "./src/plugins/markdown_title/index.ts";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [
            [remarkToc, { heading: "contents" }],
            remarkAlert,
            mermaid,
            remarkCodeTitle,
        ],
    },
    integrations: [vue(), icon()],
    redirects: {
        "/": "/index",
    },
});