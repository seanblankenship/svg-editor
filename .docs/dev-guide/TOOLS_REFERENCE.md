# SVG Editor - Tools Reference

This document provides a detailed reference for all the tools used in the SVG Editor project.

## Build & Development Tools

### Vite

Vite is used as the build tool and development server for this project.

- **Documentation**: [Vite](https://vitejs.dev/guide/)
- **Configuration File**: `vite.config.ts`
- **Key Features**:
  - Fast HMR (Hot Module Replacement)
  - ES modules-based dev server
  - Optimized production builds
  - Built-in support for TypeScript

### TypeScript

TypeScript is used for type safety throughout the project.

- **Documentation**: [TypeScript](https://www.typescriptlang.org/docs/)
- **Configuration Files**:
  - `tsconfig.json` - Main configuration
  - `tsconfig.node.json` - Node.js specific configuration
  - `tsconfig.app.json` - Application specific configuration
- **Key Features**:
  - Static type checking
  - Better IDE support
  - Enhanced code maintainability

## UI Libraries & Frameworks

### React

React is the main UI library used in this project.

- **Documentation**: [React](https://react.dev/)
- **Version**: 19.0.0
- **Key Concepts**:
  - Component-based architecture
  - Virtual DOM
  - Hooks for state and side effects

### Tailwind CSS

Tailwind CSS is used for styling components with utility classes.

- **Documentation**: [Tailwind CSS](https://tailwindcss.com/docs)
- **Configuration File**: `tailwind.config.js`
- **Key Features**:
  - Utility-first CSS framework
  - Dark mode support
  - Easily customizable

### shadcn/ui

shadcn/ui provides accessible, customizable components built on Radix UI primitives.

- **Documentation**: [shadcn/ui](https://ui.shadcn.com/)
- **Configuration File**: `components.json`
- **Available Components**:
  - Button
  - Card
  - Dialog
  - Dropdown Menu
  - Tabs
- **Adding Components**:
  ```bash
  npx shadcn-ui@latest add [component-name]
  ```

## State Management

### Zustand

Zustand is used for global state management.

- **Documentation**: [Zustand](https://github.com/pmndrs/zustand)
- **Usage**:

  ```tsx
  import { create } from 'zustand';

  interface MyState {
    count: number;
    increment: () => void;
  }

  const useMyStore = create<MyState>(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
  }));
  ```

### React Query

React Query is used for server state management and data fetching.

- **Documentation**: [TanStack Query](https://tanstack.com/query/latest/docs/react/overview)
- **Key Features**:
  - Data fetching
  - Caching
  - Background updates
  - Error handling

## SVG Manipulation

### SVG.js

SVG.js is used for manipulating SVG elements.

- **Documentation**: [SVG.js](https://svgjs.dev/docs/3.0/)
- **Key Features**:
  - Create and manipulate SVG elements
  - Animation
  - Event handling
  - Transforms

## Code Editing

### Monaco Editor

Monaco Editor (the code editor that powers VS Code) is used for editing SVG code.

- **Documentation**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Key Features**:
  - Syntax highlighting
  - IntelliSense
  - Multi-language support
  - Themes

## Testing Tools

### Vitest

Vitest is used for unit and component testing.

- **Documentation**: [Vitest](https://vitest.dev/guide/)
- **Configuration File**: `vite.config.ts`
- **Key Features**:
  - Fast test runner
  - Compatible with Jest APIs
  - HMR for tests
  - TypeScript support

### React Testing Library

React Testing Library is used for testing React components.

- **Documentation**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Key Features**:
  - Testing components as users use them
  - Encourages accessible code
  - Queries for DOM nodes

### Playwright

Playwright is used for visual regression testing and end-to-end testing.

- **Documentation**: [Playwright](https://playwright.dev/docs/intro)
- **Configuration File**: `playwright.config.ts`
- **Key Features**:
  - Cross-browser testing
  - Visual comparison
  - Automation
  - Screenshot and video capture

## Documentation Tools

### Storybook

Storybook is used for documenting and developing UI components in isolation.

- **Documentation**: [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- **Configuration Directory**: `.storybook/`
- **Key Features**:
  - Component isolation
  - Interactive documentation
  - Addon ecosystem
  - Accessibility testing

## Code Quality Tools

### ESLint

ESLint is used for identifying and fixing code problems.

- **Documentation**: [ESLint](https://eslint.org/docs/user-guide/getting-started)
- **Configuration Files**:
  - `.eslintrc.cjs`
  - `eslint.config.js`
- **Key Features**:
  - Customizable rules
  - Plugin system
  - Automatic fixing

### Prettier

Prettier is used for code formatting.

- **Documentation**: [Prettier](https://prettier.io/docs/en/)
- **Configuration File**: `.prettierrc`
- **Key Features**:
  - Consistent code style
  - Language support
  - Editor integration

### Husky

Husky is used for Git hooks.

- **Documentation**: [Husky](https://typicode.github.io/husky/#/)
- **Configuration Directory**: `.husky/`
- **Key Features**:
  - Git hooks management
  - Pre-commit validation
  - Integration with lint-staged

### lint-staged

lint-staged is used to run linters on staged files.

- **Documentation**: [lint-staged](https://github.com/okonet/lint-staged)
- **Configuration**: In `package.json` under `"lint-staged"`
- **Key Features**:
  - Only lint changed files
  - Multiple command support
  - Fast execution

## VS Code Integration

### Extensions

Recommended VS Code extensions are configured in `.vscode/extensions.json`:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript
- Auto Rename Tag
- Code Spell Checker
- DotENV
- PostCSS

### Settings

VS Code workspace settings are configured in `.vscode/settings.json`:

- Format on save
- Default formatters
- Tailwind CSS configuration
- Search exclusions
