import { ReactNode } from 'react';
import styled from 'styled-components';
import { SIDEBAR_WIDTH } from '../styles/styles';

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.main`
  padding: 1rem;

  @media (min-width: 640px) {
    margin-left: ${SIDEBAR_WIDTH};
  }

  @media (max-width: 640px) {
    padding-bottom: ${SIDEBAR_WIDTH};
  }
`;

export default Container;
