import { ReactNode } from 'react';

const Container = ({ isDark, children }: { isDark?: boolean; children: ReactNode }) => {
  const background = isDark ? 'bg-slate-800' : 'bg-slate-100';

  return (
    <div className={`flex flex-col ml-20 justify-center min-h-screen ${background}`}>
      <div>{children}</div>
    </div>
  );
};

export default Container;
