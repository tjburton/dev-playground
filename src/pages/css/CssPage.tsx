import { Fragment } from 'react';
import CourseCard from '../../components/CourseCard';

const COURSES = [
  {
    title: 'Wes Bos CSS Grid',
    imageUrl: '/src/assets/css/wesbos-css-grid.png',
  },
  {
    title: 'Wes Bos CSS Grid',
    imageUrl: '/src/assets/css/wesbos-css-grid.png',
  },
  {
    title: 'Wes Bos CSS Grid',
    imageUrl: '/src/assets/css/wesbos-css-grid.png',
  },
];

const CssPage = () => {
  return (
    <Fragment>
      <div className='flex flex-col space-y-5'>
        <h1 className='text-3xl font-bold'>CSS</h1>
        <h2 className='text-2xl font-semibold' id='courses'>
          Courses
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
        {COURSES.map(({ title, imageUrl }) => {
          return <CourseCard imageUrl={imageUrl} title={title} />;
        })}
      </div>
    </Fragment>
  );
};

export default CssPage;
