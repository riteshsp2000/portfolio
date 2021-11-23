import React from 'react';

export interface ImageFallbackProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  widths?: {
    [x: string]: string;
  };
  mediaType?: string | undefined;
}

const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  mediaType = 'image/webp',
  widths = {
    '650w': 'w_650,f_auto,q_auto',
    '508w': 'w_508,f_auto,q_auto',
    '200w': 'w_200,f_auto,q_auto',
  },
}) => {
  if (!src) {
    console.error(new Error('No src provided'));
    return <div />;
  }

  const getSrcSet = (src: string): string => {
    let srcSet = '';
    if (widths) {
      Object.keys(widths).forEach(key => {
        const arr: string[] = src.split('upload');
        const lastElem = arr.pop();
        if (lastElem) {
          arr.push(`upload/${widths[key]}`, lastElem, ` ${key},`);
        }

        srcSet += arr.join('');
      });
    }
    return srcSet;
  };

  const getSrc = (src: string) => {
    const arr = src.split('upload');
    const lastElem = arr.pop();
    if (lastElem) {
      arr.push('upload/w_auto,f_auto,q_auto', lastElem);
    }

    return arr.join('');
  };

  const props = {
    source: {
      // @ts-ignore
      srcSet: getSrcSet(src),
      sizes: '(max-width: 650px) 100vw, 650px',
    },
    img: {
      loading: 'lazy',
      sizes: '(max-width: 650px) 100vw, 650px',
      // @ts-ignore
      srcSet: getSrcSet(src),
      // @ts-ignore
      src: getSrc(src),
      alt,
    },
  };

  return (
    <picture>
      <source
        srcSet={getSrcSet(src)}
        sizes="(max-width: 650px) 100vw, 650px"
        type={mediaType}
      />
      <img
        loading="lazy"
        sizes="(max-width: 650px) 100vw, 650px"
        srcSet={getSrcSet(src)}
        src={getSrc(src)}
        alt={alt}
      />
    </picture>
  );
};

export default ImageFallback;
