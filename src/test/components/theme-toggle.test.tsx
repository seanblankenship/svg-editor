import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../utils';
import { ThemeToggle } from '@/components/theme-toggle';

// Mock the useTheme hook
vi.mock('next-themes', async () => {
  const actual = await vi.importActual('next-themes');
  return {
    ...actual,
    useTheme: () => ({
      theme: 'light',
      setTheme: vi.fn(),
    }),
  };
});

describe('ThemeToggle', () => {
  it('renders toggle button', () => {
    render(<ThemeToggle />);

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(toggleButton).toBeInTheDocument();
  });
});
