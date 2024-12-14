import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);

	// What we usually do here is fetch the data from somewhere else
	// const response = await fetch(`https://someapi.com/blog/${params.articleId}`);

	// Dummy data and response

	const blogArticles = [
		{
			id: 0,
			title: 'First Blog Post',
			content:
				'This is the first blog post. It is a dummy blog post for the SvelteKit crash course This is the first blog post. It is a dummy blog post for the SvelteKit crash course. Let us say something about Isaac Newton. Sir Isaac Newton PRS was an English mathematician, physicist, astronomer, theologian, and author who is widely recognised as one of the greatest mathematicians and most influential scientists of all time and as a key figure in the scientific revolution.'
		},
		{
			id: 1,
			title: 'Second Blog Post',
			content:
				"This is the second blog post. It is a dummy blog post for the SvelteKit crash course. Let's say something about Mahatma Gandhi. Mahatma Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British rule, and in turn inspired movements for civil rights and freedom across the world."
		},
		{
			id: 2,
			title: 'Third Blog Post',
			content:
				"This is the third blog post. It is a dummy blog post for the SvelteKit crash course. Let's say something about Albert Einstein. Albert Einstein was a German-born theoretical physicist, widely acknowledged to be one of the greatest physicists of all time. Einstein is known for developing the theory of relativity, but he also made important contributions to the development of the theory of quantum mechanics."
		}
	];

	const foundArticle = blogArticles.find((article) => article.id === parseInt(params.articleId));

	if (!foundArticle) {
		throw error(404, 'Article not found');
	}

	return {
		blogPost: foundArticle
	};
};
