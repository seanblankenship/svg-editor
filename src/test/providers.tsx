import React from 'react';
import { ThemeProvider } from 'next-themes';

// Custom wrapper provider with all required contexts
export function AllProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
