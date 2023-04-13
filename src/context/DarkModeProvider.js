import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function DarkModeProvider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
}
