import { Post } from "@/shared/components/Post/Post";

import { StrapiService } from "@/services/strapiService/strapiService";

import s from "./page.module.css";

export default async function BlogPage() {
	const allPosts = await StrapiService.getAllPosts({ language: "uk-UA" });

	return (
		<div className={s.wrapper}>
			{allPosts.data.data.map((post) => (
				<Post key={post.id} post={post} variant="short" />
			))}
		</div>
	);
}
