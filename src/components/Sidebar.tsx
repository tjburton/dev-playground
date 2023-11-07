import { ReactNode, useState } from 'react';

import TailwindLogo from '../assets/Tailwind_CSS_Logo.svg';
import PlaygroundLogo from '../assets/pg-logo.png';

const leftMargin = 'px-6';

const headings = [
  { id: 1, name: 'Tailwind' },
  { id: 2, name: 'Animation' },
  { id: 3, name: 'Components' },
  { id: 4, name: 'JavaScript' },
];

const pages = [
  { id: 1, parentId: 1, name: 'Basic 1' },
  { id: 2, parentId: 1, name: 'Basic 2' },
  { id: 3, parentId: 1, name: 'Basic 3' },
  { id: 4, parentId: 1, name: 'Basic 4' },
  { id: 5, parentId: 1, name: 'Basic 5' },
];

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar((prevState) => !prevState);
  };

  return (
    <div
      className={`flex flex-col shadow shadow-neutral-600 ${
        openSidebar ? 'w-60' : 'max-w-[6rem]'
      } space-y-5 left-0 min-h-screen bg-slate-700 fixed top-0 z-10`}
    >
      <div className='flex h-16 bg-slate-800'>
        <div className='flex items-center'>
          <img src={PlaygroundLogo} alt='playground logo' className='visible max-w-[3rem]' />
          <h1
            className={`text-xl text-slate-300 ${leftMargin} ${
              openSidebar ? 'text-opacity-100 visible block' : 'text-opacity-0 invisible hidden'
            }`}
          >
            Playground
          </h1>
          <div onClick={handleClick} className='w-[2rem] text-lg cursor-pointer text-slate-300'>
            {'>>'}
          </div>
        </div>
      </div>
      <div className={`${leftMargin} group-hover/sidebar:visible`}>
        <SidebarSection openSidebar={openSidebar} heading='Tailwind'>
          <SidebarItem>Basic 1</SidebarItem>
          <SidebarItem>Basic 2</SidebarItem>
          <SidebarItem>Basic 3</SidebarItem>
          <SidebarItem>Basic 4</SidebarItem>
          <SidebarItem>Basic 5</SidebarItem>
        </SidebarSection>
        <SidebarSection openSidebar={openSidebar} heading='Animation'>
          <SidebarItem>Advanced 1</SidebarItem>
          <SidebarItem>Advanced 2</SidebarItem>
          <SidebarItem>Advanced 3</SidebarItem>
          <SidebarItem>Advanced 4</SidebarItem>
          <SidebarItem>Advanced 5</SidebarItem>
        </SidebarSection>
      </div>
    </div>
  );
};

const ImageLogo = ({ imgSrc, heading }: { imgSrc: string; heading: string }) => (
  <img src={imgSrc} alt={`${heading.toLowerCase()} logo`} className='visible max-w-[3rem]' />
);

const SidebarSection = ({
  openSidebar,
  heading,
  children,
}: {
  openSidebar: boolean;
  heading: string;
  children: ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible((prevState) => !prevState);
  };

  const getLogo = (heading: string) => {
    if (heading.toLowerCase() === 'tailwind') {
      return <ImageLogo imgSrc={TailwindLogo} heading={heading} />;
    }
  };

  return (
    <div>
      <div className='flex items-center text-center space-x-4 mb-10'>
        {getLogo(heading)}
        <h1 onClick={handleClick} className='text-lg text-slate-300 text-opacity-100 cursor-pointer'>
          {openSidebar ? heading : ''}
        </h1>
      </div>
      {visible && (
        <div
          className={`${
            visible ? 'group-hover/sidebar:text-opacity-100 group-hover/sidebar:visible' : 'text-opacity-0 invisible'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const SidebarItem = ({ children }: { children: string }) => {
  const defaultStyles = ['invisible', 'absolute', 'opacity-0'].join(' ');

  const hoverStyles = [
    'group-hover/sidebar-section:visible',
    'group-hover/sidebar-section:static',
    'group-hover/sidebar-section:flex',
    'group-hover/sidebar-section:opacity-100',
    'group-hover/sidebar-section:duration-200',
    'group-hover/sidebar:text-opacity-100',
  ].join(' ');

  return (
    <div className={`flex hover:bg-slate-800 h-12 items-center`}>
      <a href='#' className='text-slate-300 pl-5'>
        {children}
      </a>
    </div>
  );
};

export default Sidebar;
