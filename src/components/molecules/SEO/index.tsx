import React from 'react';

// Libraries
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {useLocation} from '@reach/router';

const Head: React.FC = () => {
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
            twitterHandle
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
    twitterHandle,
  } = siteMetadata;

  const seo = {
    title,
    description,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title}>
      <meta charSet="utf-8" />
      <html lang="en" />
      <link rel="canonical" href={siteUrl} />

      {/* ================ Primary Meta Tags ================  */}
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content="ritesh, patil, developer, fullstack, react, node.js, portfolio"
      />

      {/* ================ Open Graph / Facebook ================  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" itemProp="image" content={seo.image} />
      <meta property="og:image:url" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image:type" content="image/png" />

      {/* ================ Twitter ================  */}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content={seo.url} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta
        name="google-site-verification"
        content="Yjf0lM5SOILC4FBOSkkLARh4i9qmxWIvbScAMRax8a4"
      />
    </Helmet>
  );
};

export default Head;
