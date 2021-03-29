/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from 'react';

// Utils
import {getInitialColorMode} from './utils';

import {COLOR_MODE_KEY, COLORS, INITIAL_COLOR_MODE_CSS_PROP} from './constants';

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

  useEffect(() => {
    const root = window.document.documentElement;
    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP,
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue: string): void => {
    const root = window.document.documentElement;

    localStorage.setItem(COLOR_MODE_KEY, newValue);
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
      // @ts-ignore
      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });

    rawSetColorMode(newValue);
  };
  const value = useMemo(() => ({colorMode, setColorMode}), [colorMode]);
  return <ThemeContext.Provider value={value} {...props} />;
}

// ==================== Context Usage Hook ==================== //
export function useTheme(): [
  colorMode: string,
  setColorMode: (theme: Theme) => void,
] {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within Theme Provider');

  const {colorMode, setColorMode} = context;
  return [colorMode, setColorMode];
}
