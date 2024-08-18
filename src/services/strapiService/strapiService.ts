import { Axios } from "@/config/axios";

import { GetAllPostsParams, GetAllPostsResponse, GetPostParams } from "./types";

export class StrapiService {
	static async getAllPosts({ language }: GetAllPostsParams) {
		return await Axios.get<GetAllPostsResponse>(
			`/posts?populate=*&locale=${language}`
		);
	}

	static async getPost({ slug, language }: GetPostParams) {
		return await Axios.get<GetAllPostsResponse>(
			`/posts?populate=*&locale=${language}&filters[slug][$eq]=${slug}`
		);
	}
}
