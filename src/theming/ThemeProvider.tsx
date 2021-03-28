/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useState, useMemo, createContext, useContext} from 'react';

// Utils
import {getInitialColorMode} from './utils';

// ==================== Context Types ==================== //
export enum Theme {
  dark = 'dark',
  light = 'light',
}

export type ThemeContextType = {
  colorMode: Theme;
  setColorMode: (Theme: Theme) => void;
};

// ==================== Theme Context ==================== //
const ThemeContext = createContext<ThemeContextType>({
  colorMode: Theme.dark,
  setColorMode: () => {},
});

// ==================== Context Provider ==================== //
export function ThemeProvider(props: any): JSX.Element {
  const [colorMode, rawSetColorMode] = useState<string | null>(
    getInitialColorMode,
  );
  const setColorMode = (value: string): void => {
    rawSetColorMode(value);
    // Persist state in local storage after update
    window.localStorage.setItem('color-mode', value);
  };
  const value = useMemo(() => [colorMode, setColorMode], [colorMode]);
  return <ThemeContext.Provider value={value} {...props} />;
}

// ==================== Context Usage Hook ==================== //
export function useTheme(): [
  colorMode: string,
  setColorMode: (value: string) => void,
] {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within Theme Provider');
  // @ts-ignore
  const [colorMode, setColorMode] = context;
  return [colorMode, setColorMode];
}
