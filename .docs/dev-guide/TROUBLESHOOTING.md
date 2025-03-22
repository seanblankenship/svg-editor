# SVG Editor - Troubleshooting Guide

This document provides solutions for common issues you might encounter while working on the SVG Editor project.

## Development Server Issues

### Development Server Won't Start

**Symptoms:**

- Error when running `npm run dev`
- Server starts but immediately crashes

**Possible Solutions:**

1. Check for port conflicts:

   ```bash
   # Find processes using port 3000
   lsof -i :3000
   # Kill the process if needed
   kill -9 <PID>
   ```

2. Verify dependencies are installed:

   ```bash
   npm install
   ```

3. Check for syntax errors in your code:
   ```bash
   npm run lint
   ```

### Hot Module Replacement Not Working

**Symptoms:**

- Changes to code don't appear in browser
- Need to manually refresh to see changes

**Possible Solutions:**

1. Check that the file you're editing is properly imported
2. Make sure you're not using `export default` with anonymous components
3. Restart the development server

## Build Issues

### Build Fails

**Symptoms:**

- Error when running `npm run build`
- TypeScript compilation errors

**Possible Solutions:**

1. Fix TypeScript errors:

   ```bash
   npx tsc --noEmit
   ```

2. Check for missing dependencies in package.json
3. Clear the cache and node_modules:
   ```bash
   rm -rf node_modules
   npm cache clean --force
   npm install
   ```

## Testing Issues

### Vitest Tests Failing

**Symptoms:**

- Tests fail with unexpected errors
- Tests pass locally but fail in CI

**Possible Solutions:**

1. Update test snapshots if expected changes were made:

   ```bash
   npm run test -- -u
   ```

2. Check that your component is properly wrapped with test providers
3. Look for asynchronous operations that might need proper waiting

### Playwright Tests Failing

**Symptoms:**

- Visual regression tests fail
- Cannot find elements on the page

**Possible Solutions:**

1. Make sure the development server is running
2. Update snapshots if UI has intentionally changed:

   ```bash
   npx playwright test --project=visual-tests --update-snapshots
   ```

3. Check selectors used in tests
4. Increase timeouts for slow operations:
   ```typescript
   await page.waitForSelector('.element', { timeout: 10000 });
   ```

### Missing Playwright Package

**Symptoms:**

- Error: `Cannot find package '@playwright/test'`

**Solutions:**

1. Install the Playwright test package:
   ```bash
   npm install -D @playwright/test
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Storybook Issues

### Storybook Won't Start

**Symptoms:**

- Error when running `npm run storybook`
- Blank screen in browser

**Possible Solutions:**

1. Check for syntax errors in story files
2. Update Storybook dependencies:

   ```bash
   npx storybook upgrade
   ```

3. Clear Storybook cache:
   ```bash
   npx storybook clean
   ```

### Component Not Rendering in Storybook

**Symptoms:**

- Story loads but component doesn't display
- Error in Storybook console

**Possible Solutions:**

1. Check if the component needs context providers
2. Verify props passed to the component
3. Check for CSS conflicts

## Theme Issues

### Theme Toggle Not Working

**Symptoms:**

- Clicking theme toggle does nothing
- Theme applies incorrectly

**Possible Solutions:**

1. Check the browser's localStorage:

   ```javascript
   // In browser console
   localStorage.getItem('theme');
   ```

2. Verify CSS variables are defined correctly in `index.css`
3. Check that `ThemeProvider` is wrapping your application
4. Ensure the `attribute` prop is set to `"class"` on `ThemeProvider`

## TypeScript Issues

### Type Errors

**Symptoms:**

- TypeScript compilation errors
- Red squiggly lines in editor

**Possible Solutions:**

1. Check import paths
2. Make sure types are properly defined
3. Update TypeScript version:

   ```bash
   npm install -D typescript@latest
   ```

4. Regenerate TypeScript definitions:
   ```bash
   npx tsc --declaration --emitDeclarationOnly
   ```

## CSS Issues

### Tailwind Classes Not Applied

**Symptoms:**

- Tailwind classes have no effect
- CSS looks different in production

**Possible Solutions:**

1. Check if class names are correct
2. Make sure PostCSS is configured properly
3. Rebuild Tailwind's CSS:

   ```bash
   npx tailwindcss -i ./src/index.css -o ./src/styles/tailwind.css
   ```

4. Check for CSS specificity issues

## Git and Husky Issues

### Pre-commit Hooks Not Running

**Symptoms:**

- Commits go through without linting
- Husky scripts don't execute

**Possible Solutions:**

1. Make sure Husky is installed:

   ```bash
   npm run prepare
   ```

2. Check that Husky hooks are executable:

   ```bash
   chmod +x .husky/*
   ```

3. Ensure Git is using core.hookspath:
   ```bash
   git config core.hookspath .husky
   ```

## Dependency Issues

### Conflicting Dependencies

**Symptoms:**

- Cryptic errors about duplicate modules
- Package version conflicts

**Possible Solutions:**

1. Deduplicate dependencies:

   ```bash
   npm dedupe
   ```

2. Check for peer dependency warnings
3. Update packages to compatible versions

### Missing Peer Dependencies

**Symptoms:**

- Warnings about missing peer dependencies
- Features don't work as expected

**Possible Solutions:**

1. Install missing peer dependencies:

   ```bash
   # Example
   npm install -D @types/react @types/react-dom
   ```

2. Update to compatible versions of dependencies

## Performance Issues

### Slow Development Server

**Symptoms:**

- Dev server takes long to start
- Hot reloading is slow

**Possible Solutions:**

1. Use the faster dependencies in your vite.config.ts
2. Optimize imports with barrel files
3. Disable unnecessary plugins during development

### Application Feels Sluggish

**Symptoms:**

- UI interactions are slow
- High CPU usage

**Possible Solutions:**

1. Check for render bottlenecks with React DevTools
2. Look for expensive calculations in render methods
3. Use performance profiling:
   ```bash
   # In Chrome DevTools
   # Record performance profile while using the application
   ```
