import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {H3, P3, RedirectLink} from '@components';

const Stage = styled.div`
  width: var(--nav-stage-width);
  height: auto;
  min-height: 350px;
  padding-left: 3.5rem;

  @media (max-width: 700px) {
    max-width: 100%;
    padding-left: 0;
    padding-top: 2rem;
  }
`;

const WorkStage = () => {
  return (
    <Stage>
      <H3>
        UI Engineer{' '}
        <RedirectLink href="https://bharatpe.com" style={{fontSize: 'inherit'}}>
          @BharatPe
        </RedirectLink>
      </H3>
      <P3 style={{fontSize: '14px'}}>November 2021 - Present</P3>

      <ul
        style={{
          listStyleType: 'circle',
          marginTop: '1rem',
          paddingLeft: '1rem',
        }}
      >
        {[1, 2, 3].map(number => (
          <li key={number}>
            <P3>
              Developed and shipped highly interactive web applications for
              Apple Music using Ember.js
            </P3>
          </li>
        ))}
      </ul>
    </Stage>
  );
};

export default WorkStage;
