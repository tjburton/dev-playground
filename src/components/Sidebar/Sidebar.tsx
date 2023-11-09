import {
  GamepadRoundedIcon,
  ColorLensRoundedIcon,
  WavingHandRoundedIcon,
  GridViewRounded,
  CodeRounded,
  DarkModeRoundedIcon,
  KeyboardDoubleArrowRightRoundedIcon,
  SidebarContainer,
  StyledMenu,
  StyledMenuItem,
  StyledIcon,
  StyledMenuHeading,
} from './Sidebar.styles';

{
  // CSS sections for Tailwind, StyledComponents, etc.
  // Components will be the result of Tailwind practice and/ or animation
  // JavaScript will contain things like array methods, algorithms, react design patterns, etc.
}

const SECTIONS = [
  { id: 1, name: 'Playground', icon: <GamepadRoundedIcon />, route: '/' },
  { id: 2, name: 'CSS', icon: <ColorLensRoundedIcon />, route: '/css' },
  {
    id: 3,
    name: 'Animation',
    icon: <WavingHandRoundedIcon />,
    route: '/animation',
  },
  {
    id: 4,
    name: 'Components',
    icon: <GridViewRounded />,
    route: '/components',
  },
  { id: 5, name: 'JavaScript', icon: <CodeRounded />, route: '/javascript' },
  { id: 6, name: 'Theme', icon: <DarkModeRoundedIcon />, route: '/' },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <StyledMenu>
        {SECTIONS.map(({ id, name, icon, route }) => {
          const isTitle = id === 1;

          return (
            <StyledMenuItem to={route} key={name}>
              {!isTitle && <StyledIcon>{icon}</StyledIcon>}
              <StyledMenuHeading>
                {isTitle ? name.toUpperCase() : name}
              </StyledMenuHeading>
              {isTitle && (
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

export default Sidebar;
