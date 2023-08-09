import { sanityClient } from '$lib/api/cms';
import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		const data = await sanityClient.fetch(
			`*[_type=='articles'] {
                _createdAt,
                _updatedAt,
                _id,
                title,
                author,
                image,
                description
            }`,
		);

		return json(data);
	} catch (error) {
		console.error('Error fetching articles:', error);
		return {
			status: 500,
			body: {
				error: 'Internal server error',
			},
		};
	}
}
