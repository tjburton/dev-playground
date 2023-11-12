// Wes Bos Grid CSS Course
// https://cssgrid.io

import Lessons from './lessons/Lessons';
import CourseCard from '../../../../components/CourseCard';
import styled from 'styled-components';
import { COLOURS } from '../../../../styles/styles';

const LESSONS = [
  { id: 3, name: 'CSS Grid Fundamentals', component: <Lessons /> },
  { id: 4, name: 'CSS Grid Dev Tools', component: <Lessons /> },
  {
    id: 5,
    name: 'CSS Grid Implicit vs Explicit Tracks',
    component: <Lessons />,
  },
];

const WesBosGrid = () => {
  return (
    <div>
      <h1 className='text-2xl'>Wes Bos CSS Grid</h1>
      <div className='mt-4'>
        <span>
          Course link{': '}
          <Anchor href='https://cssgrid.io' className=''>
            cssgrid.io
          </Anchor>
        </span>
      </div>
      <div className='flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-4'>
        {LESSONS.map(({ id, name }) => {
          return (
            <CourseCard
              key={id}
              title={name}
              path={name.toLowerCase().replaceAll(' ', '-')}
            />
          );
        })}
      </div>
    </div>
  );
};

const Anchor = styled.a`
  color: ${COLOURS.primary[500]};
`;

export default WesBosGrid;
