# Paradise Nursery Shopping Application

A responsive plant-shop demo built with React, React Router, Redux Toolkit, and Vite.

## Features
- Landing page with a plant-themed hero and Get Started button
- About Us page
- 18 houseplants across 3 categories (6 per category)
- Product cards with images, descriptions, and prices
- Redux-powered shopping cart with add, remove, and quantity controls
- Shared navigation and live cart item count
- Cart totals and a “Coming Soon” checkout message
- Responsive layout for desktop and mobile

## Run locally
1. Install Node.js (LTS).
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

## Build
Run `npm run build`. The production files will be created in `dist/`.

## Project structure
```text
src/
  components/
    Navbar.jsx
    AboutUs.jsx
    ProductList.jsx
    CartItem.jsx
  data/
    plants.js
  redux/
    store.js
    CartSlice.jsx
  App.jsx
  App.css
  main.jsx
```

Plant images are loaded from Unsplash source URLs and therefore require an internet connection. Replace them with local assets if preferred.
