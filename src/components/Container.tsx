import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <StyledContainer>
      <div>{children}</div>
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  margin-left: 8rem;
  padding: 1rem;
`;

export default Container;
