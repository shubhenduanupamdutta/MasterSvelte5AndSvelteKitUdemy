import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);

	// What we usually do here is fetch the data from somewhere else
	// const response = await fetch(`https://someapi.com/blog/${params.articleId}`);

	return {
		blogPost: 'This is the example blog post',
		articleId: params.articleId,
	};
};
