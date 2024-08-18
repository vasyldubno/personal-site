import { FC, ImgHTMLAttributes } from "react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { StrapiPostType } from "@/shared/types";

import s from "./FullPost.module.css";
import { MarkdonwImage } from "./MarkdonwImage/MarkdonwImage";

interface FullPostProps {
	post: StrapiPostType;
}

export const FullPost: FC<FullPostProps> = ({ post }) => {
	return (
		<div className={s.wrapper}>
			<Markdown className={s.title}>{post.attributes.Title}</Markdown>
			<Markdown
				remarkPlugins={[remarkGfm, remarkBreaks]}
				components={{
					img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
						<MarkdonwImage {...props} />
					),
					li: (props) => (
						<li {...props} style={{ listStyle: "none" }}>
							{props.children}
						</li>
					)
				}}
			>
				{post.attributes.Content.replace(/\n/gi, "&nbsp; \n")}
			</Markdown>
		</div>
	);
};
