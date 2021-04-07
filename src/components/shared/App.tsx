import React from 'react';

// Libraries
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {useLocation} from '@reach/router';

// Components/Configuration
import {ThemeProvider, GlobalStyles} from '../../theming';

const App: React.FC = ({children}) => {
  const {pathname} = useLocation();

  const {
    site: {siteMetadata},
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const {
    defaultTitle: title,
    defaultDescription: description,
    siteUrl,
    defaultImage: image,
    twitterUsername,
  } = siteMetadata;

  const seo = {
    title,
    description,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image}`,
  };

  return (
    <>
      <Helmet
        title={title}
        defaultTitle={seo.title}
        titleTemplate={`%s | ${title}`}
      >
        <meta charSet="utf-8" />
        <html lang="en" />
        <link rel="canonical" href={siteUrl} />

        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>

      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};

export default App;
