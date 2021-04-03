/* eslint-disable arrow-body-style */
import React from 'react';

// Libraries
import {Link, PageProps} from 'gatsby';
import styled from 'styled-components';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
} from '../components/templates';
import {PageTitle, TertiaryHeading} from '../components';

// Assets
import ErrorImage from '../images/404.gif';

const ErrorPage: React.FC<PageProps> = ({location}) => {
  return (
    <RegularTemplate location={location}>
      <LayoutFirstRow showVector={false}>
        <PageTitle>Error 404: Page Not Found</PageTitle>
      </LayoutFirstRow>

      <LayoutSecondRow>
        <Link to="/" style={{textDecoration: 'none'}}>
          <TertiaryHeading>Go Back Home</TertiaryHeading>
        </Link>

        <CenteredDiv>
          <Image src={ErrorImage} alt="Error 404" />
        </CenteredDiv>
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default ErrorPage;

const CenteredDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
`;
