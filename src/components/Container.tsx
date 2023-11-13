import { ReactNode } from 'react';
import styled from 'styled-components';
import { SIDEBAR_WIDTH } from '../styles/styles';
import BackButton from './BackButton';
import { useLocation } from 'react-router-dom';
import {
  SideBarContainerClosed,
  SidebarContainer,
} from './Sidebar/Sidebar.styles';

const Container = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <StyledContainer>
      {pathname !== '/' && <BackButton />}
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  padding: 1rem;
  min-height: 100vh;

  &:active ${SidebarContainer} {
    ${SideBarContainerClosed}
  }

  @media (min-width: 640px) {
    margin-left: ${SIDEBAR_WIDTH};
  }

  @media (max-width: 640px) {
    padding-bottom: ${SIDEBAR_WIDTH};
  }
`;

export default Container;
