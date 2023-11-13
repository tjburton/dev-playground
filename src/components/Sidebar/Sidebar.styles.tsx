import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLOURS, SIDEBAR_WIDTH, BREAKPOINTS } from '../../styles/styles';
const { primary, secondary, neutral } = COLOURS;
const { sm } = BREAKPOINTS;

export const StyledMenuHeading = styled.div`
  width: 9rem;
  display: none;
  color: ${neutral[50]};
`;

export const StyledIcon = styled.div`
  color: ${neutral[50]};
  opacity: 0.8;
`;

export const StyledMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${primary[900]};

  &:hover {
    background-color: ${primary[800]};
  }

  &:hover ${StyledIcon} {
    color: ${secondary[500]};
    opacity: 1;
  }

  &.active ${StyledIcon} {
    color: ${secondary[500]};
    opacity: 1;
  }

  &:first-child {
    background-color: ${primary[900]};
    color: ${primary[50]};
    font-weight: 600;
    border-radius: 0.35rem;
  }

  @media (min-width: ${sm}) {
    gap: 1rem;
    height: 5rem;
    padding-left: 1rem;
    width: 100%;

    &:first-child {
      border-radius: 0 0.35rem 0.35rem 0.35rem;
    }

    &:last-child {
      position: absolute;
      bottom: 0;
      background-color: ${primary[900]};
      color: ${primary[50]};
      border-radius: 0.35rem;
    }
  }

  @media (max-width: ${sm}) {
    max-height: ${SIDEBAR_WIDTH};
    width: 100%;
    justify-content: center;

    &:last-child {
      display: none;
    }
  }
`;

export const StyledMenu = styled.div`
  display: flex;

  @media (min-width: ${sm}) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${sm}) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const SideBarContainerClosed = `
  position: fixed;
  height: 100vh;
  width: ${SIDEBAR_WIDTH};
  background-color: ${primary[600]};
  transition: width 200ms ease;
  border-radius: 0.35rem;
`;

export const SidebarContainer = styled.div`
  ${ SideBarContainerClosed }

  @media (min-width: ${sm}) {
    &:hover,
    &:active {
      width: 14rem;
    }

    &:hover ${StyledMenuHeading}, &:active ${StyledMenuHeading} {
      display: block;

      @media (max-width: ${sm}) {
        display: none;
      }
    }
  }

  @media (max-width: ${sm}) {
    display: flex;
    bottom: 0;
    width: 100vw;
    height: ${SIDEBAR_WIDTH};
  }
`;
