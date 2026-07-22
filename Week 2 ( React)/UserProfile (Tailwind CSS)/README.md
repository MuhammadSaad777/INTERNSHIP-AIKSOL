# React Learning Project (Vite + Tailwind CSS)

A hands-on React project built while learning core concepts step by step — from JSX basics to controlled forms to styling with Tailwind CSS. Built with **Vite** and **React**.

## Tech Stack

- **React** – UI library
- **Vite** – build tool & dev server
- **JavaScript (JSX)**
- **Tailwind CSS** – utility-first styling (as of Day 5)

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── components/
│   ├── UserProfile.jsx
│   ├── Counter.jsx
│   ├── Toggle.jsx
│   ├── ProductItem.jsx
│   ├── RegistrationForm.jsx
│   └── Navbar.jsx
├── App.jsx
├── index.css
└── main.jsx
vite.config.js
```

> Note: as of Day 5, component-level `.css` files were removed in favor of Tailwind utility classes. Styling now lives directly in each component's JSX.

## Progress Log

### Day 1: Vite & JSX
- Scaffolded the project using `npm create vite@latest`.
- Learned core JSX rules — self-closing tags, `className` instead of `class`, camelCase attributes.
- Built a static `UserProfile` component with hardcoded content.
- Rendered `UserProfile` three times inside `App.jsx` to practice component reuse.

### Day 2: Props & State
- Refactored `UserProfile` to accept `name`, `role`, and `imageUrl` as **props**, making each instance dynamic instead of hardcoded.
- Learned the `useState` hook.
- Built a `Counter` component — state holding a number, incremented on button click.
- Built a `Toggle` component — state holding a boolean, switching between `ON` / `OFF` on click.

### Day 3: Lists & Keys
- Created an array of 5 product objects (`id`, `name`, `price`) in `App.jsx`.
- Rendered the list using `.map()`, with a unique `key` prop (`product.id`) on each item.
- Extracted the list item into its own `ProductItem` component, passing `product` data down as props.
- Added a **Delete** button to `ProductItem` that calls a function passed down from `App.jsx` (`onDelete`) to remove that product from state — demonstrating **lifting state up** and child-to-parent communication.

### Day 4: Controlled Forms
- Built a `RegistrationForm` component with `email`, `username`, and `password` inputs.
- Used a single `useState` object to hold all form values.
- Bound each input's `value` and `onChange` directly to state, making them **controlled components**.
- Added an `onSubmit` handler that calls `e.preventDefault()` and logs form data to the console.
- Added local validation (valid email format, username length, password > 6 characters) with error messages rendered conditionally below each field.

### Day 5: Tailwind CSS
- Installed and configured **Tailwind CSS v4** using the `@tailwindcss/vite` plugin.
- Removed all traditional per-component CSS files in favor of Tailwind utility classes.
- Restyled `RegistrationForm` inputs, buttons, and error text using Tailwind utilities.
- Built a responsive top **Navbar** using Tailwind's Flexbox (`flex`, `justify-between`, `items-center`) and spacing utilities.
- Refactored `ProductItem` into a polished card layout using borders, shadows (`shadow-md`, `hover:shadow-lg`), and spacing utilities.
- No component logic or state was changed — this was a pure styling migration.

## Key Concepts Covered So Far

| Concept | Where |
|---|---|
| JSX syntax rules | Day 1 |
| Component composition & reuse | Day 1 |
| Props (parent → child data) | Day 2 |
| `useState` hook | Day 2 |
| Rendering lists with `.map()` | Day 3 |
| `key` prop in lists | Day 3 |
| Lifting state up / child → parent communication | Day 3 |
| Controlled form inputs | Day 4 |
| Form validation | Day 4 |
| Utility-first CSS with Tailwind | Day 5 |
| Responsive layout with Flexbox utilities | Day 5 |
| Card UI patterns (shadows, borders, hover states) | Day 5 |

## Notes

- Profile images (`avatar1.jpg`, `avatar2.jpg`, `avatar3.jpg`) must be placed in the `public/` folder for `UserProfile` to display them correctly.
- Form submission currently only logs to the browser console (no backend integration yet).
- Navbar links (`Home`, `Products`, `About`, `Contact`) are placeholders (`href="#"`) — no routing has been added yet. Real navigation (e.g. React Router) is expected in a later stage.