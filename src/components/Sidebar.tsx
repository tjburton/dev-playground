import styled from 'styled-components';

import CodeRounded from '@mui/icons-material/CodeRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import GridViewRounded from '@mui/icons-material/GridViewRounded';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import { COLOURS, SIDEBAR_WIDTH } from '../styles/styles';
const { primary, secondary, neutral } = COLOURS;

const SECTIONS = [
  { id: 1, name: 'Playground', icon: <GamepadRoundedIcon /> },
  { id: 2, name: 'Tailwind', icon: <ColorLensRoundedIcon /> },
  { id: 3, name: 'Animation', icon: <WavingHandRoundedIcon /> },
  { id: 4, name: 'Components', icon: <GridViewRounded /> },
  { id: 5, name: 'JavaScript', icon: <CodeRounded /> },
  { id: 6, name: 'Theme', icon: <DarkModeRoundedIcon /> },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <StyledMenu>
        {SECTIONS.map(({ id, name, icon }) => {
          return (
            <StyledMenuItem key={name}>
              {id !== 1 && <StyledIcon>{icon}</StyledIcon>}
              <StyledMenuHeading>{id === 1 ? name.toUpperCase() : name}</StyledMenuHeading>
              {id === 1 && (
                <StyledIcon>
                  <KeyboardDoubleArrowRightRoundedIcon fontSize='large' />
                </StyledIcon>
              )}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </SidebarContainer>
  );
};

const StyledMenuHeading = styled.div`
  width: 9rem;
  display: none;
  color: ${neutral[50]};
`;

const StyledIcon = styled.div`
  color: ${neutral[50]};
  opacity: 0.8;
`;

const StyledMenuItem = styled.div`
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

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarContainer = styled.div`
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

export default Sidebar;
