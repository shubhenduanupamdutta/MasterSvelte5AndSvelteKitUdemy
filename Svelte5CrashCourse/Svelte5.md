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

---

## Reactivity in Svelte

---

_Now let's say we want to change something on the page depending on user input. This is called reactivity or Reactive State._

**In Svelte 5, you can use `state` rune to specify a reactive variable.**

```js
let number = $state(0);
function onClick() {
  number++;
}
```

_Above code means, `number` is initialized with 0 and it is reactive. That means whenever for any reason number is changed, the page or at least parts where number is used will be updated._

### Showing different text based on some variables value

#### Using html

```html
<p>
  {number == 0 ? "Hey, why don't you try clicking on the button?" : `You've clicked ${number}
  times!`}
</p>
```

_Above code will show different text based on the value of `number`. if `number` is `0` then it will show a prompt, and if its not 0, it will show the number of clicks._

#### Using JavaScript

```js
let userInformation = $derived(
  number == 0 ? "Hey, why don't you try clicking on the button?" : `You've clicked ${number} times!`
);
```

```html
<p>{userInformation}</p>
```

_This will also do the same thing, and makes the userInformation derived from the number._

**In above example, which is a very small one, it doesn't really matter which we choose. But suppose we have a very complex logic to derive the `userInformation` and it is used in multiple places in the page, then it is better to use the JavaScript way.**

#### We can also have more complicated logic inside derived rune

```js
function calculateUserInformation(number: number) {
  if (number === 0) {
    return "Hey, why don't you try clicking on the button?";
  }
  if (number === 1) {
    return "You've clicked once!";
  }
  return `You've clicked ${number} times!`;
}

let userInformation = $derived.by(() => calculateUserInformation(number));
```

### NOTE: We are going to use `state` and `derived` runes a lot in Svelte 5, so it is better to get familiar with them.

### Reactivity with Input Fields

```html
<input type="text" bind:value="{name}" />
```

```js
let name = $state("");
```

_Above code will create an input field and bind the value of the input field to the `name` variable. So whenever the user types something in the input field, the `name` variable will be updated._

### `effect` rune

_This is a sort of escape hatch and last resort for when you need to do something that is not possible with `state` and `derived` runes._

_**So where to use `effect` rune?**_

_We can use effect rune, when we want to create some external effect, when some state updates. For example, when we want to make an API call when some state updates._

```js
$effect(() => {
  console.log("Effect hook is running");
  if (userName) {
    console.log("I will send the name to the database, current user name is: ", userName);
  }
});
```

_The above code will log the user name to the console whenever the `userName` variable is updated. And if there are multiple state variables inside effect then each one will run effect. This effect will also run when the state variable is initialized._

### `inspect` rune

**We can track a state using `effect` rune, but as we know, it is a last resort, a better rune for this will be `inspect` rune.**

```js
$inspect(userName);
```

_Above will automatically track `userName` state and log it to the console whenever it is updated. This is very helpful in debugging._

---

## Component in Svelte

---

**Components can be created inside a file, in `lib/component` folder in the project.**

_We can move our user input component in a `UserInput.svelte` file._

_And we can call in `UserInput` component from `+page.svelte` file._

_**How do we communicate between components, and root page?**_

_This can be done using `props` rune._

_Inside `UserInput` component`_

```js
let data = $props();
$inspect(data);
```

_Inside `+page` component_

```html
<UserInput userName={"Shubhendu"} />
```

_Then userName will be passed to the `UserInput` component. And if there are some other things inside the `<UserInput> tag, then they will be passed as children._

_And children can be rendered with_

```js
// typescript compatibility
import type { Snippet } from "svelte";

interface UserInputInterface {
  children: Snippet;
  userName: string;
}

let { userName, children, ...props }: UserInputInterface = $props();
```

```html
<input type="text" bind:value="{userName}" /> {@render children()}
```

---

## Snippet

---
**Snippet is a type of svelte, it is nothing but a component. There can be multiple snippets in one file.**

```html
{#snippet userEmail()}
	<h2>Your Email Address</h2>
	<input type="email" bind:value={email} />
	{@render children()}

	<p>Your email address is: {email}</p>
{/snippet}
```
_In snippet we don't get extra script and style tag, they will be defined globally._

#### NOTE: For any kind of snippet we can only use one variable, either it is a primitive or an Object. We can't use multiple variables in a snippet.