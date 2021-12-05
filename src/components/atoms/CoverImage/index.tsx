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
  margin-bottom: 2rem;

  .cover-image {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 3/2;
  }
`;

export interface CoverImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  aspectRatio?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({src, alt, ...rest}) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} className="cover-image" {...rest} />
    </ImageContainer>
  );
};

export default CoverImage;
