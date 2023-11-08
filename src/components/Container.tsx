import { ReactNode } from 'react';
import styled from 'styled-components';
import { SIDEBAR_WIDTH } from '../styles/styles';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <StyledContainer>
      <div>{children}</div>
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  margin-left: ${SIDEBAR_WIDTH};
  padding: 1rem;
`;

export default Container;
