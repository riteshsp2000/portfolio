import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Image} from '@components';

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100px;
  border-radius: 8px;
  overflow: hidden;
`;

export interface CoverImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  aspectRatio: string;
}

const CoverImage: React.FC<CoverImageProps> = ({
  src,
  alt,
  aspectRatio,
  ...rest
}) => {
  return (
    <ImageContainer>
      <Image
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          aspectRatio,
        }}
        {...rest}
      />
    </ImageContainer>
  );
};

export default CoverImage;
