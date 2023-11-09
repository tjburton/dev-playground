import { Link } from 'react-router-dom';
import styled from 'styled-components';

export { default as CodeRounded } from '@mui/icons-material/CodeRounded';
export { default as ColorLensRoundedIcon } from '@mui/icons-material/ColorLensRounded';
export { default as GridViewRounded } from '@mui/icons-material/GridViewRounded';
export { default as WavingHandRoundedIcon } from '@mui/icons-material/WavingHandRounded';
export { default as GamepadRoundedIcon } from '@mui/icons-material/GamepadRounded';
export { default as DarkModeRoundedIcon } from '@mui/icons-material/DarkModeRounded';
export { default as KeyboardDoubleArrowRightRoundedIcon } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { COLOURS, SIDEBAR_WIDTH } from '../../styles/styles';
const { primary, secondary, neutral } = COLOURS;

export const StyledMenuHeading = styled.div`
  width: 9rem;
  display: none;
  color: ${neutral[50]};
`;

export const StyledIcon = styled.div`
  color: ${neutral[50]};
  opacity: 0.8;
`;

export const StyledMenuItem = styled(Link)`
  display: flex;
  height: 5rem;
  align-items: center;
  width: 100%;
  color: ${primary[900]};
  padding-left: 1rem;
  gap: 1rem;

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

  &:hover {
    background-color: ${primary[800]};
  }

  &:hover ${StyledIcon} {
    color: ${secondary[500]};
    opacity: 1;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: ${SIDEBAR_WIDTH};
  background-color: ${primary[600]};
  transition: width 200ms ease;

  &:hover {
    width: 14rem;
  }

  &:hover ${StyledMenuHeading} {
    display: block;
  }
`;
