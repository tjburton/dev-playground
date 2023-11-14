import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import Error from '../pages/Error';
import Home from '../pages/Home';
import CssHome from '../pages/css/CssHome';
import WesBosGrid from '../pages/css/courses/wes-bos-css-grid/WesBosCssGrid';
import AnimationHome from '../pages/animation/AnimationHome';
import ComponentsHome from '../pages/components/ComponentsHome';
import JavaScriptHome from '../pages/javascript/JavaScriptHome';
import LessonsContainer from '../components/wes-bos-lessons-container/LessonsContainer';

// TODO: create a courses component for /css/courses
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/animation', element: <AnimationHome /> },
      { path: '/components', element: <ComponentsHome /> },
      { path: '/css', element: <CssHome /> },
      { path: '/css/courses', element: <CssHome /> },
      { path: '/css/courses/wesbos-css-grid', element: <WesBosGrid /> },
      {
        path: '/css/courses/wesbos-css-grid/:lessonName',
        element: <LessonsContainer />,
      },
      { path: '/javascript', element: <JavaScriptHome /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
