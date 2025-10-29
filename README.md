# Password Generator (React + Vite)

A fast, modern password generator built with React 19 and Vite. Adjust length with a slider, toggle character sets with switches, and copy the result to your clipboard instantly.

## Live Demo

Visit the live app here: [`react-password-generator-kappa-olive.vercel.app`](https://react-password-generator-kappa-olive.vercel.app/)

## Features

-   Adjustable password length via slider
-   Toggle inclusion of lowercase, uppercase, numbers, and symbols
-   One-click copy to clipboard
-   Responsive UI with accessible controls

## Tech Stack

-   React 19 + Vite 7
-   Radix UI primitives: `@radix-ui/react-slider`, `@radix-ui/react-switch`
-   Icons: `lucide-react`
-   ESLint 9 for linting

## Getting Started

Prerequisites:

-   Node.js 18+ recommended

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    PasswordGenerator/
      PasswordGenerator.jsx
      PasswordGenerator.css
    ui/
      Slider/
        Slider.jsx
        Slider.css
      Switch/
        Switch.jsx
        Switch.css
  App.jsx
  App.css
  main.jsx
```

## Scripts

-   `npm run dev`: Start the Vite dev server
-   `npm run build`: Build the app for production
-   `npm run preview`: Preview the production build
-   `npm run lint`: Run ESLint

---

Deployed with Vercel.
