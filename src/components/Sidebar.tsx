import { useState } from 'react';

// import TailwindLogo from '../assets/Tailwind_CSS_Logo.svg';
// import PlaygroundLogo from '../assets/pg-logo.png';
import styled from 'styled-components';
import { COLOURS } from '../styles/styles';
import CodeRounded from '@mui/icons-material';
import CssRounded from '@mui/icons-material';
import GridViewRounded from '@mui/icons-material';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';

const { primary } = COLOURS;
type SectionTypes = 'Tailwind' | 'Animation' | 'Components' | 'JavaScript';

const sections = [
  { id: 1, name: 'Tailwind', icon: `${CssRounded}` },
  { id: 2, name: 'Animation', icon: `${WavingHandRoundedIcon}` },
  { id: 3, name: 'Components', icon: `${CodeRounded}` },
  { id: 4, name: 'JavaScript', icon: `${GridViewRounded}` },
];

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar((prevState) => !prevState);
  };

  return (
    <SidebarContainer>
      <StyledHeading>
        <h1 className='text-xl'>Playground</h1>
      </StyledHeading>

      <div>
        {sections.map(({ name, icon }) => {
          return (
            <div>
              <div>{icon}</div>
              <div>{name}</div>
            </div>
          );
        })}
      </div>
    </SidebarContainer>
  );
};

const ImageLogo = ({
  imgSrc,
  heading,
}: {
  imgSrc: string;
  heading: string;
}) => <img src={imgSrc} alt={`${heading.toLowerCase()} logo`} />;

const StyledHeading = styled.h1`
  background-color: ${primary[700]};
  width: 100%;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  min-width: 8rem;
  background-color: ${primary[500]};
  align-items: center;
`;

export default Sidebar;
