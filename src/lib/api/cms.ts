import { writable } from 'svelte/store';

import { createClient } from '@sanity/client';
import axios from 'axios';

//const SANITY_URL = 'https://39xahi57.api.sanity.io/v2021-10-21/data/query/production';
const SANITY_PROJECT_ID = '39xahi57';
const SANITY_API_VERSION = 'v2021-10-21';

export const sanityClient = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: 'production',
	useCdn: false,
	apiVersion: SANITY_API_VERSION,
});

export const articles = writable([]);

export async function getAllArticles() {
	const data = await sanityClient.fetch(
		`*[_type == "article"] {
                _createdAt,
                _updatedAt,
                _id,
                title,
                author,
                "image_url" : image.asset->url,
                description
            }`,
	);
	articles.set(data);
	return data;
}

export async function getArticle(id: string) {
	const data = await sanityClient.fetch(
		`*[_type == "article" && _id == "${id}"]{
            _createdAt,
            _updatedAt,
            _id,
            title,
            author,
            "image_url" : image.asset->url,
            description,
			content
	}`,
	);
	return data[0];
}
