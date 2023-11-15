import { Fragment } from 'react';
import CourseCard from '../../components/CourseCard';

const COURSES = [
  {
    id: 1,
    title: 'Wes Bos CSS Grid',
    imageUrl: '/src/assets/css/course-covers/wesbos-css-grid.png',
  },
  {
    id: 2,
    title: 'Wes Bos CSS Grid',
    imageUrl: '/src/assets/css/course-covers/wesbos-css-grid.png',
  },
  {
    id: 3,
    title: 'Wes Bos CSS Grid',
    imageUrl: '/src/assets/css/course-covers/wesbos-css-grid.png',
  },
];

const CssHome = () => {
  return (
    <Fragment>
      <div className='flex flex-col space-y-5'>
        <h1 className='text-3xl font-bold'>CSS</h1>
        <h2 className='text-2xl font-semibold' id='courses'>
          Courses
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
        {COURSES.map(({ id, title, imageUrl }) => {
          return <CourseCard key={id} imageUrl={imageUrl} title={title} />;
        })}
      </div>
    </Fragment>
  );
};

export default CssHome;
