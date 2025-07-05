## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) package manager installed globally (optional but recommended)

Install pnpm globally (if you don’t have it):

```bash
npm install -g pnpm
```

## 🚀 How to Run Locally

```bash
pnpm install
pnpm run dev`
```

## 🧱 Tech Stack

### Core Framework & Language

- **React 19** – Component-based UI library for building modern single-page apps.
- **TypeScript** – Superset of JavaScript that adds static typing for better developer experience and fewer bugs.

### Tooling & Build System

- **Vite** – Fast and modern build tool with instant dev server start and optimized hot module replacement.
  - ✅ _Why Vite?_ It’s built for modern ESM workflows, offers blazing-fast HMR, and integrates seamlessly with React via `@vitejs/plugin-react`.
- **ESLint** – Linting tool to enforce code quality and consistency.
- **vite-plugin-checker** – Provides real-time TypeScript and ESLint feedback during development.

### UI & Styling

- **MUI (Material UI)** – Comprehensive React UI component library:
  - `@mui/material`, `@mui/icons-material`, `@mui/lab`, `@mui/x-data-grid`
- **Emotion** – CSS-in-JS library used by MUI:
  - `@emotion/react`, `@emotion/styled`, `@emotion/cache`
- **RTL Support** – `stylis-plugin-rtl` for right-to-left layout rendering.
- **Fonts** –
  - `@fontsource/noto-kufi-arabic` for Arabic text.
  - `@fontsource/roboto` for general Latin typography.

### Routing

- **react-router-dom v7** – Modern routing library with nested routes, loaders, and actions.

### State Management

- **Jotai** – Minimal and scalable atomic state management for React.

### Internationalization

- **react-intl** – For i18n and localization across different languages and locales.

### Animation

- **framer-motion** – Declarative animations and transitions for React components.

### Maps & Geolocation

- **Leaflet** – Open-source library for interactive maps.
- **react-leaflet** – React bindings for Leaflet to integrate maps into your components.

### Date & Time

- **dayjs** – Lightweight and fast alternative to Moment.js for date manipulation.

### UI Enhancements

- **simplebar-react** – Custom scrollbars with native behavior and styling.
