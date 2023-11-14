import { Fragment } from 'react';
import { LESSONS } from '../Lessons';
import {
  StyledLessonsContainer,
  StyledLessonsBody,
} from '../LessonsContainer/LessonsContainer.styles';
import { useParams } from 'react-router-dom';

const LessonsContainer = () => {
  const { lessonName } = useParams();

  const formattedLessonName = (name: string) =>
    name.toLowerCase().replaceAll(' ', '-');

  return (
    <StyledLessonsContainer className='flex rounded-md'>
      <StyledLessonsBody>
        {LESSONS.map(({ id, title, component }) => {
          return (
            formattedLessonName(title) === lessonName && (
              <Fragment key={id}>{component}</Fragment>
            )
          );
        })}
      </StyledLessonsBody>
    </StyledLessonsContainer>
  );
};

export default LessonsContainer;
