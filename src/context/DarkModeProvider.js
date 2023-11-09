import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function DarkModeProvider({ children }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      {children}
    </ThemeProvider>
  );
}
