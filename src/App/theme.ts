import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core';

// Passed to theme provider
export const themeOverride = createTheme({
  primaryColor: 'violet',
  primaryShade: { dark: 6, light: 8 },
  defaultRadius: 'md',
  focusRing: 'always',
  cursorType: 'pointer',
});

// For use outside of components
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
