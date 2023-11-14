import styled from 'styled-components';
import {
  MEDIA_BREAKPOINTS,
  MOBILE_TOP_BAR_HEIGHT,
  SIDEBAR_WIDTH,
} from '../../../../../styles/styles';
import { ReactNode } from 'react';

const { sm } = MEDIA_BREAKPOINTS;

const LessonsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLessonsContainer className='flex rounded-md'>
      <StyledLessonsBody>{children}</StyledLessonsBody>
    </StyledLessonsContainer>
  );
};

const LESSON_COLOURS = {
  yellow: '#ffc600',
  black: '#272727',
};

const StyledLessonsBody = styled.div`
  margin: 2rem;
  width: 100%;
`;

const StyledLessonsContainer = styled.div`
  font-weight: 900;
  font-size: 10px;
  color: ${LESSON_COLOURS.black};
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);

  background-image: url('/src/pages/css/courses/WebBosCssGrid/images/topography.svg'),
    linear-gradient(110deg, #f93d66, #6d47d9);
  background-size: 340px, auto;
  min-height: calc(92dvh);
  /* background: white; */
  background-attachment: fixed;
  letter-spacing: -1px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 5px 0;
  }

  @media (max-width: ${sm}) {
    min-height: calc(100dvh - ${SIDEBAR_WIDTH} - ${MOBILE_TOP_BAR_HEIGHT});
  }
`;

export const ItemStyled = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  font-size: 35px;
  background-color: ${LESSON_COLOURS.yellow};
`;

export default LessonsContainer;
