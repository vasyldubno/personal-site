import {
	StrapiLanguageType,
	StrapiMetaType,
	StrapiPostType
} from "@/shared/types";

export interface GetAllPostsResponse {
	data: StrapiPostType[];
	meta: StrapiMetaType;
}

export interface GetAllPostsParams {
	language: StrapiLanguageType;
}

export interface GetPostParams {
	slug: string;
	language: StrapiLanguageType;
}

export interface GetPostResponse {
	data: StrapiPostType[];
	meta: StrapiMetaType;
}
