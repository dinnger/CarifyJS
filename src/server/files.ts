import { globSync } from "glob";

export interface IListFiles {
	index: number;
	name: string;
	url: string;
	folder: string[] | null;
	level: number;
}

export async function listFiles(): Promise<IListFiles[]> {
	// glob scan docs
	const listDocs: string[] = await globSync(["docs/*.md", "docs/**/*.md"]);
	if (!listDocs.length) throw new Error("No files found");
	return listDocs.map((doc, index) => {
		const name = doc
			.replace(/\\/g, "/")
			.replace("docs/", "")
			.replace(".md", "");
		const split = name.split("/");
		const file = {
			index,
			folder: split.length === 1 ? null : split,
			level: split.length,
			name: split.pop()?.toString() || "",
			url: name,
		};
		return file;
	});
}
