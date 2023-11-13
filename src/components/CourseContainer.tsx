import { ReactNode } from 'react';
import styled from 'styled-components';

const CourseContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default CourseContainer;
