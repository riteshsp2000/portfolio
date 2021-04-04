// Libraries
import {createGlobalStyle} from 'styled-components';

// Fonts
import wotfardLight from '../fonts/Wotfard-Light.ttf';
import wotfardMedium from '../fonts/Wotfard-Medium.ttf';
import wotfardRegular from '../fonts/Wotfard-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Wotfard';
    src: url(${wotfardLight}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wotfard';
    src: url(${wotfardRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Wotfard';
    src: url(${wotfardMedium}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
    font-family: 'Wotfard';
  }

  html, body {
    max-width: 100vw;
    min-height: 100vh;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: var(--color-background);
    scroll-behavior: smooth;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    --font-weight-bold: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;
    --font-family: "Wotfard", "Poppins", -apple-system, sans-serif;
    --reach-dialog: 1;
    --reach-tabs: 1;
  }
  [tabindex] {
   outline: none !important;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #0E151C; 
    height: 100px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5f676e; 
    border-radius: 5px;
  }
`;

export default GlobalStyles;
