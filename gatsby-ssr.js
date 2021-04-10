import React from 'react';

// Libraries
import {Helmet} from 'react-helmet';
import Terser from 'terser';

// Components
import App from './src/components/shared/App';

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/theming/constants';

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'dark';
  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;
  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  // calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{__html: calledFunction}} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    '',
  );

  const rootVariables =
    '--font-weight-bold: 500; --font-weight-regular: 400; --font-weight-light: 300; --font-family: &quot;Wotfard&quot;, &quot;Poppins&quot;, -apple-system, sans-serif; --reach-dialog: 1; --reach-tabs: 1; transition: none;';

  const wrappedInSelector = `html { ${cssVariableString} }`;
  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = (
  {
    setPreBodyComponents,
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
  },
  pluginOptions,
) => {
  // const helmet = Helmet.renderStatic();
  // console.log(helmet);
  // setHtmlAttributes(helmet.htmlAttributes.toComponent());
  // setBodyAttributes(helmet.bodyAttributes.toComponent());
  // setHeadComponents([
  //   helmet.title.toComponent(),
  //   helmet.base.toComponent(),
  //   helmet.meta.toComponent(),
  //   helmet.link.toComponent(),
  //   helmet.noscript.toComponent(),
  //   helmet.script.toComponent(),
  //   helmet.style.toComponent(),
  // ]);

  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<MagicScriptTag />);
};

// export const onPreRenderHTML = ({getHeadComponents, replaceHeadComponents}) => {
//   const headComponents = getHeadComponents();

//   headComponents.sort((x, y) => {
//     if (x.props && x.props['data-react-helmet']) {
//       return -1;
//     } else if (y.props && y.props['data-react-helmet']) {
//       return 1;
//     }
//     return 0;
//   });

//   replaceHeadComponents(headComponents);
// };

export const wrapPageElement = ({element}) => {
  return <App>{element}</App>;
};
