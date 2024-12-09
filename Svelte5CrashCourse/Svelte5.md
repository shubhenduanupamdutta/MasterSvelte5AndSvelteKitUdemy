# Svelte 5 Crash Course

---

## Creating a new Svelte app

```bash
npx sv create my_new_app
```

### Configuration Used

- SvelteKit minimal
- TypeScript Syntax
- prettier, eslint
- npm

```bash
cd my_new_app
npm install
npm run dev
```

**This will open a new browser window with the app running on localhost:5173**

---

## Structure of a \*.svelte file

It is a mix of HTML, CSS, and JavaScript in a single file.

```html
<script lang="ts">
  let name = "world";
</script>

<h1>Hello {name}!</h1>

<style>
  h1 {
    color: blue;
  }
</style>
```

**Basically the file will contain three sections:**

- `<script>`: JavaScript code at the top
- HTML code in the middle
- `<style>`: CSS code at the bottom

**Anything in the `<script>` and `<style>` tags will be scoped to the component. That is, JS and Style will only apply to the html in the page.**
