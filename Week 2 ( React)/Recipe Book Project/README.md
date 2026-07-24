# Recipe Book

A simple recipe book app built with React, Vite, and Tailwind CSS. Add recipes with a name, ingredients, and instructions, and view them as cards in a grid — with the ability to delete any recipe.

## Tech Stack

- React
- Vite
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Features

- Add a new recipe using the form (Recipe Name, Ingredients, Instructions)
- All recipes are displayed as cards in a responsive grid
- Delete any recipe with the click of a button — updates instantly

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── RecipeForm.jsx
│   └── RecipeCard.jsx
├── App.jsx
├── index.css
└── main.jsx
```