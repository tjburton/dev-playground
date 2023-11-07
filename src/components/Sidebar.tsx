import { ReactNode } from 'react';

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
  return (
    <div className='group/sidebar flex flex-col w-20 space-y-5 left-0 min-h-screen bg-slate-700 hover:w-40 fixed top-0'>
      <div className='flex h-16 bg-slate-800 items-center'>
        <h1
          className={`text-xl text-slate-300 ${leftMargin} text-opacity-0 hover:text-opacity-100 group-hover/sidebar:text-opacity-100`}
        >
          Playground
        </h1>
      </div>
      <div className={`${leftMargin}`}>
        <SidebarSection heading='Tailwind'>
          <SidebarItem>Basic 1</SidebarItem>
          <SidebarItem>Basic 2</SidebarItem>
          <SidebarItem>Basic 3</SidebarItem>
          <SidebarItem>Basic 4</SidebarItem>
          <SidebarItem>Basic 5</SidebarItem>
        </SidebarSection>
        <SidebarSection heading='Animation'>
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

const SidebarSection = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div className='group/sidebar-section'>
      <h1 className='text-lg text-slate-300 mb-4 hover:mb-0 text-opacity-0 group-hover/sidebar-section:text-opacity-100`'>
        {heading}
      </h1>
      {children}
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
    <div
      className={`hover:bg-slate-800 h-12 items-center ${defaultStyles} ${hoverStyles}`}
    >
      <a href='#' className='text-slate-300'>
        {children}
      </a>
    </div>
  );
};

export default Sidebar;
