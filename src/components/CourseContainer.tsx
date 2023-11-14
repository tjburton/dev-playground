import { ReactNode } from 'react';
import styled from 'styled-components';

const CourseContainer = ({ children }: { children: ReactNode }) => {
  return <CourseContainerStyled>{children}</CourseContainerStyled>;
};

export const CourseContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default CourseContainer;
