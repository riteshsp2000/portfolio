export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

export const COLORS = {
  text: {
    light: '#0A0C10',
    dark: '#FFFFFF',
  },
  'primary-heading': {
    light: '#21232C',
    dark: '#F2F5F7',
  },
  'secondary-heading': {
    light: '#6C7693',
    dark: '#7E8C9A',
  },
  background: {
    light: '#FFFFFF',
    dark: '#0E151C',
  },
  primary: {
    light: '#4433FF',
    dark: '#5773FF',
  },
  secondary: {
    light: '#E60067',
    dark: '#FF0A78',
  },
  tertiary: {
    light: '#2C0B8E',
    dark: '#FFE100',
  },
  'gradient-background-one': {
    light: '#D3EAF8',
    dark: 'rgba(179, 229, 255, 0.1)',
  },
  'gradient-background-two': {
    light: '#BFDEF2',
    dark: 'rgba(179, 229, 255, 0)',
  },
  decorative: {
    light: '#63BCE9',
    dark: '#66AACC',
  },
  'decorative-background': {
    light: '#21232C',
    dark: '#F2F5F7',
  },
};

export const UNIT = 8;
export const CONTROL_RADIUS = 3;

export const BREAKPOINT_SIZES = {
  sm: 540,
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
