"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PAGES } from "@/constants";

import s from "./Navigation.module.css";

export const Navigation = () => {
	const location = usePathname();

	return (
		<div className={s.wrapper}>
			<Link
				className={clsx([s.link, location === PAGES.HOME.link && s.active])}
				href={PAGES.HOME.link}
			>
				{PAGES.HOME.name}
			</Link>
			<Link
				className={clsx([s.link, location === PAGES.BLOG.link && s.active])}
				href={PAGES.BLOG.link}
			>
				{PAGES.BLOG.name}
			</Link>
		</div>
	);
};
