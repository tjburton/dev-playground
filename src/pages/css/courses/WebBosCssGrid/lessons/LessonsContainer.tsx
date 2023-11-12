import { ReactNode } from 'react';



const LessonContainer = ({ children }: { children: ReactNode }) => {
  return <div className='flex'>{children}</div>;
};

export default LessonContainer;
