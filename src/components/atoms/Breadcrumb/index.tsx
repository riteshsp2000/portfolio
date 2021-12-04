import React from 'react';

// Libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

// Components
import {Flexbox} from '@components';
import {Item} from './styles';

const Breadcrumb = () => {
  return (
    <Flexbox alignCenter>
      {['Home', 'Blogs', 'React'].map((item, index) => (
        <React.Fragment key={item}>
          <Item>{item}</Item>
          {index !== 2 && (
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{
                fontSize: '0.7rem',
                marginRight: '0.5rem',
                color: 'var(--color-text-tertiary)',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Flexbox>
  );
};

export default Breadcrumb;
