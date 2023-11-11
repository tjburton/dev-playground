import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLOURS, SIDEBAR_WIDTH } from '../../styles/styles';
const { primary, secondary, neutral } = COLOURS;

export const StyledMenuHeading = styled.div`
  width: 9rem;
  display: none;
  color: ${neutral[50]};

  @media (max-width: 640px) {
    display: none;
  }
`;

export const StyledIcon = styled.div`
  color: ${neutral[50]};
  opacity: 0.8;
`;

export const StyledMenuItem = styled(Link)`
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

  @media (min-width: 640px) {
    gap: 1rem;
    height: 5rem;
    padding-left: 1rem;
    width: 100%;

    &:first-child {
      background-color: ${primary[900]};
      color: ${primary[50]};
      font-weight: 600;

      ${StyledIcon} {
        color: ${secondary[500]};
      }
    }

    &:last-child {
      position: absolute;
      bottom: 0;
      margin-top: auto;
      background-color: ${primary[900]};
      color: ${primary[50]};
    }
  }

  @media (max-width: 640px) {
    max-height: ${SIDEBAR_WIDTH};
    width: 100%;
    justify-content: center;

    &:first-child {
    }

    &:last-child {
      display: none;
    }
  }
`;

export const StyledMenu = styled.div`
  display: flex;

  @media (min-width: 640px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: ${SIDEBAR_WIDTH};
  background-color: ${primary[600]};
  transition: width 200ms ease;

  @media (min-width: 640px) {
    &:hover {
      width: 14rem;
    }

    &:hover ${StyledMenuHeading} {
      display: block;

      @media (max-width: 640px) {
        display: none;
      }
    }
  }

  @media (max-width: 640px) {
    display: flex;
    bottom: 0;
    width: 100vw;
    max-height: ${SIDEBAR_WIDTH};
  }
`;
