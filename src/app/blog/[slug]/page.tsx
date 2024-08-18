import { FullPost } from "@/shared/components/Post/FullPost/FullPost";

import { StrapiService } from "@/services/strapiService/strapiService";

interface BlogPostPageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	const posts = await StrapiService.getAllPosts({ language: "uk-UA" });

	return posts.data.data.map((post) => ({
		slug: post.attributes.slug.toString()
	}));
}

export default async function BlogPostPage(props: BlogPostPageProps) {
	const post = await StrapiService.getPost({
		slug: props.params.slug,
		language: "uk-UA"
	});

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				padding: "50px 0"
			}}
		>
			<FullPost post={post.data.data[0]} />
		</div>
	);
}
