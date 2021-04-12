import React from 'react';

// Libraries
import styled from 'styled-components';
import {GatsbyImage} from 'gatsby-plugin-image';
import {graphql, useStaticQuery} from 'gatsby';

// Config
import config from '../../config';
import {BREAKPOINTS} from '../../theming';

interface Props {
  isLoading?: boolean;
}

const About: React.FC<Props> = () => {
  const {
    profileImageArray: {nodes},
  } = useStaticQuery(graphql`
    query ImageQuery {
      profileImageArray: allFile(filter: {name: {regex: "/Ritesh/"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);

  const profileImage = nodes[0];

  return (
    <Container id="about">
      <ColumnOne>
        <GatsbyImage
          image={profileImage.childImageSharp.gatsbyImageData}
          imgStyle={{
            backgroundColor: 'var(--color-gradient-background-one)',
            borderRadius: '5px',
            transition: 'background-color 350ms ease 0s',
          }}
          alt="Ritesh Patil Profile Picture"
        />
      </ColumnOne>

      <ColumnTwo>
        <NewPara>
          Hey! I am Ritesh Patil, a Student Passionate about Computer Science. I
          enjoy creating web applications that live on the internet and can be
          accessed by everyone. I have been developing software for the past 2
          years and it has been awesome so far!
        </NewPara>
        <NewPara style={{marginTop: '10px'}}>
          Fast Forward to today, I am a undergrad at National Institute of
          Technology Rourkela, India in the field of Industrial Design. My main
          focus these days is to write performant and industry standard code
          mainly using React and Node.js. I pay close attention to details, and
          have a great understanding of what it takes to build great
          user-centric experiences.
        </NewPara>

        <TagContainer>
          {config.tech.map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </TagContainer>
      </ColumnTwo>
    </Container>
  );
};

export default About;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;

  padding: 150px 30px;
  padding-bottom: 100px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${BREAKPOINTS.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 70px;
  }
`;

const ColumnOne = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 20px;

  @media ${BREAKPOINTS.md} {
    width: 70%;
  }

  @media ${BREAKPOINTS.sm} {
    width: 80%;
  }
`;

const ColumnTwo = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  padding: 20px;
  padding-left: 50px;

  @media ${BREAKPOINTS.md} {
    width: 100%;
    padding: 0px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;

const NewPara = styled.p`
  color: var(--color-text);
  font-weight: var(--font-weight-light);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.6;
  text-align: right;

  @media ${BREAKPOINTS.md} {
    text-align: center;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;

  @media ${BREAKPOINTS.md} {
    justify-content: center;
  }
`;

const Tag = styled.span`
  border-radius: 10px;
  padding: 10px 20px;
  margin: 5px 0px 5px 10px;
  background-color: var(--color-gradient-background-one);

  color: var(--color-text);
  font-size: 13px;
  line-height: 1;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  text-align: center;
`;
