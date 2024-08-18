interface StrapiImageType {
	id: number;
	attributes: {
		name: string;
		alternativeText: string | null;
		caption: string | null;
		width: number;
		height: number;
		formats: Record<StrapiImageFormatKeyType, StrapiImageFormatType>;
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: string | null;
		provider: string;
		provider_metadata: {
			public_id: string;
			resource_type: string;
		};
		createdAt: string;
		updatedAt: string;
	};
}

type StrapiImageFormatKeyType = "large" | "small" | "medium" | "thumbnail";

interface StrapiImageFormatType {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: null;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
	provider_metadata: {
		public_id: string;
		resource_type: string;
	};
}

interface StrapiLocalizationType {
	data: [
		{
			id: number;
			attributes: {
				id: number;
				attributes: {
					Title: string;
					Content: string;
					createdAt: string;
					updatedAt: string;
					publishedAt: string;
					locale: StrapiLanguageType;
					slug: string;
				};
			}[];
		}
	];
}

export interface StrapiPostType {
	id: number;
	attributes: {
		Title: string;
		Content: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: StrapiLanguageType;
		slug: string;
		images: {
			data: StrapiImageType[];
		};
		localizations: StrapiLocalizationType;
	};
}

export type StrapiLanguageType = "en" | "uk-UA";

export interface StrapiMetaType {
	pagination: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};
}
