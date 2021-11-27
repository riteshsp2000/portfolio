export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

export const COLORS = {
  primary: {
    light: '#FDA265',
    dark: '#FDA265',
  },
  secondary: {
    light: '#B8427D',
    dark: '#B8427D',
  },
  tertiary: {
    light: '#0C62A8',
    dark: '#0C62A8',
  },
  'background-primary': {
    light: '#F7F7F7',
    dark: '#0A0A0A',
  },
  'background-secondary': {
    light: '#F0F0F0',
    dark: '#181818',
  },
  'text-primary': {
    light: '#293592',
    dark: '#F2F5F7',
  },
  'text-secondary': {
    light: '#FDA265',
    dark: '#FDA265',
  },
  'text-tertiary': {
    light: '#333333',
    dark: '#7E8C9A',
  },
};

export const UNIT = 8;
export const CONTROL_RADIUS = 3;

export const BREAKPOINT_SIZES = {
  xs: 540,
  sm: 700,
  md: 800,
  lg: 1125,
};

export const BREAKPOINTS = {
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
};

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;
const userAgent =
  typeof window !== 'undefined' ? window.navigator.userAgent : 'node';
export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent);

export const MAX_WIDTH = {
  sm: '100%',
  md: `${BREAKPOINT_SIZES.md}px`,
  base: `${BREAKPOINT_SIZES.lg}px`,
};

export const Z_INDICES = {
  sidebar: 100,
  modal: 1000,
  loadingScreen: 2000,
  titlebar: 10000,
};
