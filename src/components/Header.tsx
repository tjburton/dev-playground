const Header = () => {
  return (
    <div>
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
    <div>
      <a href='#'>{children}</a>
      <div></div>
    </div>
  );
};

export default Header;
