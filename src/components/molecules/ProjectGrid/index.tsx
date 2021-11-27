import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {RegularProject} from '@components';

// Types
import {RegularProjectProps} from '../RegularProject';

const Grid = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

export interface ProjectGridProps {
  projects: RegularProjectProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({projects}) => {
  return (
    <Grid>
      {projects.map(item => (
        <RegularProject key={item.title} {...item} />
      ))}
    </Grid>
  );
};

export default ProjectGrid;
