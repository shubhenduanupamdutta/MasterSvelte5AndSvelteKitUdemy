# Landing Page for a Digital Product (E-Book)

---

## Let's first reset the basic css

**This is setting some ground rules for our css.**

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: 0;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 400;
}

body {
  font-family: "Open Sans", sans-serif;
}

/* TYPOGRAPHY */
h1 {
  font-size: 100px;
  font-family: "Anton", sans-serif;
  line-height: 1.1; /* Adjust as needed for spacing */
  font-weight: bold;
}

h2 {
  font-size: 60px;
  font-family: "Anton", sans-serif;
  line-height: 1.2;
  font-weight: bold;
}

h3 {
  font-size: 22px;
  line-height: 1.3;
  font-family: "Anton", sans-serif;
  font-weight: normal;
}

h4 {
  font-family: "Anton", sans-serif;
  font-size: 20px;
  line-height: 1.3;
  font-weight: normal;
}
p,
li {
  font-size: 20px;
  line-height: 1.4;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* UTILITY CLASSES */
.m-xs {
  margin-top: 8px;
}

.mt-s {
  margin-top: 16px;
}

.mt-m {
  margin-top: 32px;
}

.mt-l {
  margin-top: 64px;
}

.mb-xs {
  margin-bottom: 8px;
}

.mb-s {
  margin-bottom: 16px;
}

.mb-m {
  margin-bottom: 32px;
}

.mb-l {
  margin-bottom: 64px;
}

.bold {
  font-weight: 800;
}

.semi-bold {
  font-weight: 500;
}

.italic {
  font-style: italic;
}

.text-center {
  text-align: center;
}

.purple {
  color: #3233a6;
}

.white {
  color: white;
}

.light-grey {
  color: #aaaaaa;
}

.landing-page-section {
  padding: 80px 0;
  margin-left: 12vw;
  margin-right: 20vw;
  max-width: 1150px;
}
```

_No margin, no padding, and the box-sizing is set to border-box. The tap highlight color is set to transparent._

_The anchor tag is set to inherit the color and text-decoration. On hover and focus, the color and text-decoration are set to none._

_The unordered list and list items are set to no list-style, no margin, no padding, no text-indent, and no list-style-type._

_The button is set to have no background color, no border, a pointer cursor, no outline, and a font-weight of 400._

_The body is set to have a font-family of "Open Sans" and sans-serif as a fallback._

_The typography is set for h1, h2, h3, h4, p, li, h5, and h6. The h1 and h2 have a font-family of "Anton" and sans-serif as a fallback. The h1 has a font-size of 100px, a line-height of 1.1, and a font-weight of bold. The h2 has a font-size of 60px, a line-height of 1.2, and a font-weight of bold. The h3 has a font-size of 22px, a line-height of 1.3, a font-family of "Anton" and sans-serif as a fallback, and a font-weight of normal. The h4 has a font-family of "Anton" and sans-serif as a fallback, a font-size of 20px, a line-height of 1.3, and a font-weight of normal. The p and li have a font-size of 20px and a line-height of 1.4. The h1, h2, h3, h4, h5, h6, and p have a margin of 0._

_The utility classes are set for margin-top, margin-bottom, font-weight, font-style, text-align, and color._

---

## Another way of importing components

---

#### One way to do is default way, which is directly importing the component.

```html
<script>
  import HeroSection from "$lib/components/HeroSection.svelte";
</script>
```

#### Another way is to import using `index.js` file.

**First you move or create and `index.js` file inside the `components` folder.**

```js
// components/index.js
export { default as HeroSection } from "./HeroSection.svelte";
```

```html
<!-- inside +page.svelte -->
<
<script>
  import { HeroSection } from "$components";
</script>
```

**This to work you have to add an alias in the `svelte.config.js` file.**

```js
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/lib/components",
    },
  },
};

export default config;
```

---

## Passing children and properties to components

---

### In calling component/root

_Let's say you are calling a `Button` component from `HeroSection` component._

```html
<!-- Hero Section -->
<button color="purple" size="large">Get Started</button>
```

```html
<!-- Button Component -->
<script>
  let { children, ...props } = $props();
</script>

<button {...props}>{children}</button>
```

_What this will do is pass the `color` and `size` properties to the `Button` component, and the inside content will be passed as children. So in this case final output will be:_

```html
<button color="purple" size="large">Get Started</button>
```

---

## Shortcut to passing a property

---

### If you are passing a property to a component, and its value is same as the property name, you can use the shortcut.

```svelte
<!--faq component-->
<script>
    const faqs = [
        {
            question: "What is the product?",
            answer: "The product is a digital e-book that helps you learn how to code."
        },
        {
            question: "How do I get the product?",
            answer: "You can download the product from our website after purchasing it."
        }
    ]
</script>

{#each faqs as faq}
    <FaqItem {faq}/>
{/each}
```

_This will pass the `faq` object to the `FaqItem` component, and the object will be available as a prop inside the component._

---

## Stripe Integration

---

### Steps

1. **Fronted sends request to our backend with all info about the purchase.**
2. **Backend creates a checkout session with stripe by using the secret stripe key with all the given purchase information, like price and quantity.**
3. **Stripe creates session and gives us all necessary information, about the created session. Mainly we are interested in the session id.**
4. **Session ID being returned to our Svelte frontend.**
5. **Frontend redirects to given session using the stripe frontend library. With the session id, we also tell the stripe where to forward user depending upon success/failure of the purchase.**
6. **Stripe brings user back to our Svelte page depending on cancellation/failure or success, it should forward the user to different pages.**

### Installation Stripe Library

#### NOTE: As of 15th December 2024

**For Backend - Node.js**

```bash
npm install stripe
```

_This will install the Stripe SDK for Node.js._

**For Frontend - Stripe-js**

```bash
npm install @stripe/stripe-js
```

_This will install stripe-js for frontend._

### Starting Point - FrontEnd

_Whole transaction will start when, the user clicks on the `Buy Now` button. For this we need to send some information to our backend. We have to send info to backend because we have to use our private key from stripe, which must not be used on frontend/client side._

_In our specific case, we will not send anything to backend, since we only have one product, and so we don't need one, but we will work with this flow for learning purposes._

---

## Loading Environment Variables

---

**Loading environment variables in Svelte is quite easy and safe.**

```svelte
<script>
    import { PUBLIC_STRIPE_KEY } from "$env/static/public";
</script>
```

_This will load the public stripe key from the environment variables. And the available variables are only ones which has `PUBLIC` as prefix. All other are not loaded, and if accessed will throw an internal server error._

```svelte
<script>
    import { SOME_OTHER_KEY } from "$env/static/private";
</script>
```
_All other key can be imported using this syntax, but if used on frontend, will throw an error, saying that this cannot be accessed on frontend, can only be used on backend._
