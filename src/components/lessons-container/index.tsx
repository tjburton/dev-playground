import React from 'react';
import { useParams } from 'react-router-dom';

import { Lesson } from '../../types';

import { StyledLessonsContainer, StyledLessonsBody } from './index.styles';

const LessonsContainer = ({ lessons }: { lessons: Lesson[] }) => {
  const { lessonName } = useParams();

  const formattedLessonName = (name: string) =>
    name.toLowerCase().replaceAll(' ', '-');

  return (
    <StyledLessonsContainer className='flex rounded-md'>
      <StyledLessonsBody>
        {lessons.map(({ id, title, component }) => {
          return (
            formattedLessonName(title) === lessonName &&
            React.createElement(component, { key: id })
          );
        })}
      </StyledLessonsBody>
    </StyledLessonsContainer>
  );
};

export default LessonsContainer;
