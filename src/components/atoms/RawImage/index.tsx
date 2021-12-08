import React from 'react';

// Libraries
import {Helmet} from 'react-helmet';

export interface ImageFallbackProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  mediaType?: string | undefined;
  fallbackSrc?: string | undefined;
  widths?: {
    [x: string]: string;
  };
}

// const w1 = ['960w', '480w', '240w'];
// const w2 = ['500w', '250w', '125w'];
// const s1 = '(min-width: 960px) 960px, 100vw';
// const s2 = '(min-width: 500px) 500px, 100vw';

const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  srcSet,
  loading = 'lazy',
  sizes = '(max-width: 650px) 100vw, 650px',
  fallbackSrc,
  alt = 'Ritesh Patil Portfolio Image',
  mediaType = 'image/webp',
  widths = {
    '650w': 'w_650,f_auto,q_auto',
    '508w': 'w_508,f_auto,q_auto',
    '200w': 'w_200,f_auto,q_auto',
  },
  ...rest
}) => {
  if (!src) {
    console.error(new Error('No src provided'));
    return <div />;
  }

  const getSrcSet = (srcParam: string): string => {
    if (srcSet) return srcSet;

    let newSrcSet = '';
    if (widths) {
      Object.keys(widths).forEach(key => {
        const arr: string[] = srcParam.split('upload');
        const lastElem = arr.pop();
        if (lastElem) {
          arr.push(`upload/${widths[key]}`, lastElem, ` ${key},`);
        }

        newSrcSet += arr.join('');
      });
    }
    return newSrcSet;
  };

  const getSrc = (srcParam: string) => {
    const arr = srcParam.split('upload');
    const lastElem = arr.pop();
    if (lastElem) {
      arr.push('upload/w_auto,f_auto,q_auto', lastElem);
    }

    return [arr.join('').split('.webp')[0], '-1', '.png'].join('');
  };

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={getSrc(src)} />
      </Helmet>

      <picture style={{display: 'contents'}}>
        <source srcSet={getSrcSet(src)} sizes={sizes} type={mediaType} />
        <img
          loading={loading}
          decoding="async"
          sizes={sizes}
          srcSet={getSrcSet(src)}
          src={fallbackSrc}
          data-main-image=""
          alt={alt}
          {...rest}
        />
      </picture>
    </>
  );
};

export default ImageFallback;
