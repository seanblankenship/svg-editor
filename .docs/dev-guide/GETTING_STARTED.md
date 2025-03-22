# SVG Editor - Developer's Guide

This guide provides an overview of the SVG Editor project, its structure, and how to use the various development tools.

## Project Overview

SVG Editor is a web-based application that allows users to edit SVG files both visually and through code. The application is built with modern web technologies and follows best practices for code organization and quality.

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Component Documentation](#component-documentation)
- [Code Quality Tools](#code-quality-tools)
- [Theming](#theming)
- [Common Issues](#common-issues)

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run tests
npm run test

# Start Storybook (component documentation)
npm run storybook
```

## Project Structure

```
svg-editor/
├── .docs/               # Project documentation
│   ├── dev-guide/       # Developer-specific guides (this document)
│   └── ...
├── .github/             # GitHub workflows for CI/CD
├── .husky/              # Git hooks for pre-commit checks
├── .storybook/          # Storybook configuration
├── .vscode/             # VS Code configuration
├── node_modules/        # Dependencies (gitignored)
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── store/           # State management
│   ├── styles/          # Global styles
│   ├── test/            # Test utilities
│   └── types/           # TypeScript type definitions
├── tests/               # Test files
│   └── visual/          # Visual regression tests
└── ... (configuration files)
```

## Development Workflow

### Starting the Development Server

```bash
npm run dev
```

This will start the Vite development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This will create a production-ready build in the `dist` directory.

### Previewing the Production Build

```bash
npm run preview
```

This allows you to preview the production build locally before deployment.

## Testing

### Unit Testing with Vitest

We use Vitest for unit and component testing.

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

Unit tests are located in `.spec.ts` or `.test.ts` files alongside the code they test.

### Visual Regression Testing with Playwright

We use Playwright for visual regression testing to ensure the UI looks consistent across different environments.

```bash
# Run visual regression tests
npm run test:visual

# Update baseline screenshots (when making intentional UI changes)
npx playwright test --project=visual-tests --update-snapshots
```

Visual tests are located in the `tests/visual` directory.

## Component Documentation

### Storybook

We use Storybook to document and develop UI components in isolation.

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for static deployment
npm run build-storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Creating a New Story

1. Create a file named `ComponentName.stories.tsx` alongside your component.
2. Define the stories for your component's different states.

Example:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    // Component props here
  },
};
```

## Code Quality Tools

### ESLint

ESLint checks your code for potential problems and enforces coding standards.

```bash
# Run ESLint
npm run lint

# Fix automatically fixable issues
npm run lint -- --fix
```

### Prettier

Prettier ensures consistent code formatting.

```bash
# Format all files
npx prettier --write .
```

### Husky and lint-staged

Husky runs lint-staged before each commit to ensure code quality. This happens automatically when you commit code.

## Theming

### Dark/Light Mode

The application supports dark and light modes using the following:

- `ThemeProvider` from `next-themes`
- CSS variables defined in `src/index.css`
- `theme-toggle.tsx` component for switching themes

The theme is stored in localStorage and will respect the user's system preference by default.

To toggle the theme programmatically:

```tsx
import { useTheme } from 'next-themes';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
  );
}
```

## Common Issues

### Playwright Tests Failing

If you encounter issues with Playwright tests:

1. Make sure Playwright is installed:

   ```bash
   npx playwright install
   ```

2. Check that the dev server is running when running tests:

   ```bash
   npm run dev
   ```

3. Update snapshots if you made intentional UI changes:
   ```bash
   npx playwright test --project=visual-tests --update-snapshots
   ```

### TypeScript Errors

If you encounter TypeScript errors:

1. Make sure dependencies are installed:

   ```bash
   npm install
   ```

2. Check the types are generated correctly:
   ```bash
   npx tsc --noEmit
   ```

### Theme Not Working

If the theme toggle is not working:

1. Check the `localStorage` for the `theme` key value
2. Ensure the `ThemeProvider` is wrapping your application
3. Verify that CSS variables are properly defined in `index.css`
