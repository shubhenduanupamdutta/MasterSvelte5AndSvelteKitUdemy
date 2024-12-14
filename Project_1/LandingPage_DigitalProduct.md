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
