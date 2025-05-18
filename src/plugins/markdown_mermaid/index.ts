import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, PhrasingContent } from "mdast";

type Option = {
	/**
	 * Use the legacy title format, which includes a slash and a title after the alert type.
	 *
	 * Enabling legacyTitle allows modifying the title, but this is not GitHub standard.
	 */
	legacyTitle?: boolean;
	/**
	 * The tag name of the alert container. default is `div`.
	 * or you can use `blockquote` for semantic HTML.
	 */
	tagName?: string;
};

const escapeMap: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

const escapeHtml = (str: string) =>
	str.replace(/[&<>"']/g, (c) => escapeMap[c]);

export const mermaid: Plugin<[Option?], Root> = () => {
	return (tree) => {
		visit(tree, "code", (node) => {
			if (node.lang !== "mermaid") return;
			// @ts-ignore
			node.type = "html";
			node.value = `
      <div class="astro-code github-dark mermaid" data-content="${escapeHtml(node.value)}">
        <p>Loading graph...</p>
      </div>
    `;
		});
	};
};
