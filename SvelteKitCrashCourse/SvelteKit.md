# SvelteKit Crash Course

---

**SvelteKit gives us a chance to work all across the stack, front and back, inside a single project. For most modern we page you don't want to serve a static front-end page, you want to integrate some APIs, you might want to integrate database or other external-services like stripe. All of this is made pretty easy by Svelte and SvelteKit**

**And we don't have actually do anything else to get SvelteKit working, since now SvelteKit ships together with Svelte.**

---

## Moving to other page

---

**To move to other page, you can just link to it in the entry/root page. Svelte uses file based routing, so you can link to it. You have to create the folder of same name, in the `routes` folder as the page you want to link to, and inside that folder you have to create an `+page.svelte` file.**

```html
<!-- in root +page.svelte -->
<a href="/blog">Blog</a>
```

```Folder Structure
├───lib
└───routes
    └───blog
        └───+page.svelte
    |---+page.svelte
```

**This is the structure, because using SvelteKit we can integrate other things, such as backend, APIs and other services for each page, inside the folder for the page.**

**Another kind of page, which is for frontend, i.e. only for client side is `+layout.svelte`. It just wraps around all the content which is being passed into it.**

**For example, say we have a `+layout.svelte` in the root, i.e. directly inside `routes` folder.**

```html
<script lang="ts">
  let data = $props();
</script>

<header>This is my root folder header</header>
{@render data.children()}
```

_This basically means that `+layout.svelte` file takes priority, and you can render the content of actual route page inside it. This can be very useful for things like navbar. This layout file can be created for every svelte route/page._

---

**Usually we say that `+page.svelte` inside `routes` folder is the entry point for our app, but that's not really true. But real entry point is SvelteKit application, `app.html`, and if there is a `+layout.svelte` file in the root of the `routes` folder, then that is the entry point. We can import something in layout, say like an `.css` file, it will applied to everything that layout effects.**

---

## Dynamic Routing and Fetching Data Server Side

---

### Dynamic Routing

**For dynamically rendered pages, you have to create a folder with square brackets, and inside that folder you have to create a `+page.svelte` file.**

### Svelte Data Fetching

**In Svelte the way it works, there is a separation, between different filer for different kinds of data fetching.**

#### `+page.svelte` - _This is a frontend page, all the data must be fetched before it reaches here._

#### `+page.ts` or `+page.js` - _This can run either server or the client depending on the environment._

#### `+page.server.ts` or `+page.server.js` - _This runs only on the server, and is used to fetch data from the server, and then pass it to the frontend page._

### When and why would you want to use `+page.ts`?

_This is because how **SvelteKit** works. When you arrive on a entry page, server sends you some file, and then you go to some other page, server again sends you data. But if you have a `+page.ts` file, then the server already fetches the data from the front end, and it seems like you are on a single page._

_Basically, if you don't have any credentials you have to hide, then you might as well run it in `+page.ts` file._

### Data Flow

**Whenever a dynamic page is requested, then usually a `+page.server.ts` file is run, and it fetches the data from the server, and then passes it to the `+page.ts` file, which processes it if needed, and then passes it to the `+page.svelte` file, for user consumption.**

### Example
_Inside blog folder, `[articleId]` is the folder for dynamic routing. Inside that we create a `+page.server.ts` file._

```ts
// page.server.ts
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
```
