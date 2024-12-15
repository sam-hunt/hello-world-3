import type { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';
import { themeOverride } from './theme';
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={themeOverride} defaultColorScheme="dark">
      <NavigationProgress />
      {children}
    </MantineProvider>
  );
};
