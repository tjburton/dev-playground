const Header = () => {
  return (
    <div className='flex absolute top-0 pt-5 min-w-[100vw] min-h-[2rem] justify-center space-x-24 mb-10'>
      <HeaderItem>Tailwind</HeaderItem>
      {
        // Maybe renaming to CSS and have sidebar sections for Tailwind, StyledComponents, etc.
      }
      <HeaderItem>Animation</HeaderItem>
      <HeaderItem>Components</HeaderItem>
      {
        // Components will be the result of Tailwind practice and/ or animation
      }
      <HeaderItem>Javascript</HeaderItem>
      {
        // JavaScript will contain things like array methods, algorithms, react design patterns, etc.
      }
    </div>
  );
};

const HeaderItem = ({ children }: { children: string }) => {
  return (
    <div className='group'>
      <a href='#'>{children}</a>
      <div className='mx-1 mt-1 duration-200 border-b-2 border-slate-400 opacity-0 group-hover:opacity-100'></div>
    </div>
  );
};

export default Header;
