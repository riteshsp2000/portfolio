import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: calc(100% - 21px);
  height: auto;
  padding: 2rem 1rem;
  margin: 2.5rem 0;
  margin-left: 18px;

  transition: var(--transition-bg);
  background: var(--color-background-secondary);
  border-left: 3px solid var(--color-primary);
  border-radius: 7px;

  position: relative;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid var(--color-primary);
  transition: var(--transition);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  background: var(--color-background-primary);
  border: 8px solid var(--color-background-primary);
  transition: var(--transition);
  border-radius: 50%;
  position: absolute;
  top: -24px;
  left: -24px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: var(--color-primary);
  transition: var(--transition);
  font-size: 0.9rem;
  padding-left: 1px;
`;

const Quote: React.FC = ({children}) => {
  return (
    <Container>
      <IconContainer>
        <Circle>
          <Icon icon={faInfo} />
        </Circle>
      </IconContainer>

      {children}
    </Container>
  );
};

export default Quote;
