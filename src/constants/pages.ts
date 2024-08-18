interface Page {
	link: string;
	name: string;
}

type PagesKeys = "HOME" | "BLOG";

export const PAGES: Record<PagesKeys, Page> = {
	HOME: { link: "/", name: "Home" },
	BLOG: { link: "/blog", name: "Blog" }
};
