import React from 'react';

// Libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

// Components
import {Flexbox, InAppLink} from '@components';
import {Item} from './styles';

const Breadcrumb = () => {
  const items = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blogs',
      link: '/blogs',
    },
    {
      name: 'React',
      link: '/blogs?search=react',
    },
  ];
  return (
    <Flexbox alignCenter>
      {items.map(({name, link}, index) => (
        <React.Fragment key={name}>
          <InAppLink to={link}>
            <Item>{name}</Item>
          </InAppLink>
          {index !== items.length - 1 && (
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
