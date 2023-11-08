import { useState } from 'react';
import styled from 'styled-components';
import CodeRounded from '@mui/icons-material/CodeRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import GridViewRounded from '@mui/icons-material/GridViewRounded';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

import { COLOURS, SIDEBAR_WIDTH } from '../styles/styles';
const { primary, secondary, neutral } = COLOURS;
type SectionTypes = 'Tailwind' | 'Animation' | 'Components' | 'JavaScript';

const sections = [
  { id: 1, name: 'Playground', icon: <GamepadRoundedIcon /> },
  { id: 2, name: 'Tailwind', icon: <ColorLensRoundedIcon /> },
  { id: 3, name: 'Animation', icon: <WavingHandRoundedIcon /> },
  { id: 4, name: 'Components', icon: <GridViewRounded /> },
  { id: 5, name: 'JavaScript', icon: <CodeRounded /> },
  { id: 6, name: 'Theme', icon: <DarkModeRoundedIcon /> },
];

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar((prevState) => !prevState);
  };

  return (
    <SidebarContainer>
      <StyledMenu>
        {sections.map(({ name, icon }) => {
          return (
            <StyledMenuItem key={name}>
              <StyledIcon>{icon}</StyledIcon>
              <StyledMenuHeading>{name.toUpperCase()}</StyledMenuHeading>
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </SidebarContainer>
  );
};

const ImageLogo = ({ imgSrc, heading }: { imgSrc: string; heading: string }) => (
  <img src={imgSrc} alt={`${heading.toLowerCase()} logo`} />
);

const StyledMenuHeading = styled.div`
  width: 5rem;
  display: none;
  color: ${neutral[50]};
`;

const StyledIcon = styled.div`
  width: 2rem;
  color: ${neutral[50]};
`;

const StyledMenuItem = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  color: ${primary[900]};
  font-weight: 600;
  padding-left: 1rem;

  &:first-child {
    background-color: ${primary[900]};
    color: ${primary[50]};
    font-weight: bold;
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
    color: ${secondary[400]};
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
  background-color: ${primary[500]};

  &:hover {
    width: 12rem;
  }

  &:hover ${StyledMenuHeading} {
    display: block;
  }
`;

export default Sidebar;
