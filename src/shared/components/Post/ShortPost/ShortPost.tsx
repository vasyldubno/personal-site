import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Markdown from "react-markdown";

import { StrapiPostType } from "@/shared/types";

import s from "./ShortPost.module.css";

interface ShortPostProps {
	post: StrapiPostType;
}

export const ShortPost: FC<ShortPostProps> = ({ post }) => {
	return (
		<Link href={`/blog/${post.attributes.slug}`} className={s.link}>
			<Markdown>{post.attributes.Title}</Markdown>
			<div
				style={{
					height: "157px",
					width: "300px",
					position: "relative",
					overflow: "hidden"
				}}
			>
				<Image
					src={post.attributes.images.data[0].attributes.url}
					alt={post.attributes.Title}
					fill
					style={{ objectFit: "contain", height: "100%", width: "100%" }}
				/>
			</div>
		</Link>
	);
};
