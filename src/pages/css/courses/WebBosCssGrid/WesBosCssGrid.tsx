// Wes Bos Grid CSS Course
// https://cssgrid.io

import styled from 'styled-components';
import { COLOURS } from '../../../../styles/styles';
import LESSONS from './lessons/Lessons';
import LessonCard from '../../../../components/LessonCard';

const WesBosGrid = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Wes Bos CSS Grid</h1>
      <div className='mt-4'>
        <h2 className='text-2xl font-semibold' id='courses'>
          Course link{': '}
          <Anchor href='https://cssgrid.io' className=''>
            cssgrid.io
          </Anchor>
        </h2>
      </div>
      <div className='md:mx-1'>
        {LESSONS.map(({ id, title }) => {
          return (
            <LessonCard
              key={id}
              id={id}
              title={title}
              path={title.toLowerCase().replaceAll(' ', '-')}
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
