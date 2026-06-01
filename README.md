# Ariella Marchuk: Final Project Portfolio
## CS 463 Intro to Web Development at Portland State University

**Live site:**

**GitHub repo:**

## About

A one-page personal portfolio built for my CS 463 final project. 

* **About** bio
* **Experience** section (education + work)
* **Projects** section whose descriptions load live from my GitHub repos
* **Contact** form

## Running locally

* open `index.html` directly in any modern browser

**or**

* open the folder with the VS Code Live Server extension 
 _(right-click `index.html` then "Open with Live Server")._

**or**

* open the live, deployed github pages link: 

## Technologies

* HTML5 for semantic landmarks (`nav` / `main` / `section` / `footer`), one `<h1>` + nested headings
* CSS3 for custom properties, Flexbox, CSS Grid, `clamp()`, a media query, and a fixed left "binding" accent
* Vanilla JavaScript (ES6+) for `const`/`let`, arrow functions, template literals, `async/await`
* Bootstrap 5.3 for accordion, toast, scrollspy
* Bootstrap Icons
* GitHub REST API for live project descriptions
* Google Fonts for Instrument Serif, Stack Sans Headline, Inter

## Features beyond class material

* **Custom letter-hover effect** on my name where each letter jumps and flips to a random pink shade on hover (`script.js`)
* **Bootstrap Accordion** the Projects section
* **Bootstrap Toast** the contact-form confirmation popup
* **Bootstrap ScrollSpy** highlights the active section in the navbar on scroll
* **IntersectionObserver** sections fade/slide in as you scroll (`script.js`)

## Outside sources & references

* **Bootstrap Accordion** built the Projects section: https://getbootstrap.com/docs/5.3/components/accordion/
* **Bootstrap Toast** the contact-form confirmation popup: https://getbootstrap.com/docs/5.3/components/toasts/
* **Bootstrap ScrollSpy** active nav-link highlighting on scroll: https://getbootstrap.com/docs/5.3/components/scrollspy/
* **Bootstrap spacing / shorthand utilities** positioning the toast: https://getbootstrap.com/docs/5.3/utilities/spacing/
* **Bootstrap Icons** the GitHub icons on the project cards + footer, and the check-circle in the toast: https://icons.getbootstrap.com/
* **Google Fonts** Instrument Serif (section headers), Stack Sans Headline (name + navbar), Inter (body): https://fonts.googleapis.com/
* **GitHub REST API** `loadProjectDescriptions()` in `script.js` pulls each repo's live description: https://docs.github.com/en/rest/repos/repos (get-a-repository: https://docs.github.com/rest/reference/repos#get-a-repository)
* **MDN IntersectionObserver API** built the scroll-reveal animations: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API and https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
* **MDN CSS Transitions** the hover/color/transform transitions (name letters, nav links, buttons, cards): https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions
* **MDN `<script>` element / `defer`** added `defer` so the Bootstrap script doesn't block render: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
* **coolors.co** inspiration for the letter-hover color effect on my name: https://coolors.co/
* **WebAIM WAVE** automated accessibility audit: https://wave.webaim.org/
