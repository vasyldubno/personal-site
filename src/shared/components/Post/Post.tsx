import { FC } from "react";

import { StrapiPostType } from "@/shared/types";

import { FullPost } from "./FullPost/FullPost";
import { ShortPost } from "./ShortPost/ShortPost";

interface PostProps {
	variant: "short" | "full";
	post: StrapiPostType;
}

export const Post: FC<PostProps> = ({ variant, post }) => {
	return (
		<>
			{variant === "short" && <ShortPost post={post} />}
			{variant === "full" && <FullPost post={post} />}
		</>
	);
};
