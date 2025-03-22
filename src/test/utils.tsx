import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AllProviders } from './providers';

// Custom render function that includes providers
function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, {
    wrapper: AllProviders,
    ...options,
  });
}

// Setup user-event
function setup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...customRender(jsx),
  };
}

// Named exports for testing utilities
export { customRender as render, setup };
// Re-export testing library
export * from '@testing-library/react';
