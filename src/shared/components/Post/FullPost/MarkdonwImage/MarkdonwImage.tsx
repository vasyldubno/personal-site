import Image from "next/image";
import { FC, ImgHTMLAttributes } from "react";

type MarkdonwImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const MarkdonwImage: FC<MarkdonwImageProps> = ({ src, ...props }) => {
	return (
		<Image
			{...props}
			src={src || ""}
			alt=""
			width={"0"}
			height={"0"}
			sizes="100vw"
			style={{ width: "100%", height: "auto" }}
		/>
	);
};
