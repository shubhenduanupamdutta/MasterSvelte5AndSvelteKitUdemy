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

