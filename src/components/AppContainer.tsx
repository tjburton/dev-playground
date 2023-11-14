import { ReactNode } from 'react';
import styled from 'styled-components';
import { MOBILE_TOP_BAR_HEIGHT, SIDEBAR_WIDTH } from '../styles/styles';
import BackButton from './BackButton';
import { useLocation } from 'react-router-dom';
import {
  SideBarContainerClosed,
  SidebarContainer,
} from './sidebar/Sidebar.styles';
import { CourseContainerStyled } from './CourseContainer';

const AppContainer = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <MainContainer>
      {pathname !== '/' && <BackButton />}
      {children}
    </MainContainer>
  );
};

// TODO: Create Container for non lesson pages
const MainContainer = styled.main`
  min-height: calc(100dvh);
  padding: 2rem;

  ${CourseContainerStyled} {
    padding: 0rem;
  }

  &:active ${SidebarContainer} {
    ${SideBarContainerClosed}
  }

  @media (min-width: 640px) {
    margin-left: ${SIDEBAR_WIDTH};
  }

  @media (max-width: 640px) {
    padding-bottom: ${SIDEBAR_WIDTH};
    margin-top: ${MOBILE_TOP_BAR_HEIGHT};
    min-height: calc(100dvh - ${SIDEBAR_WIDTH} - ${MOBILE_TOP_BAR_HEIGHT});
  }
`;

export default AppContainer;
