import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App';
import Error from '../pages/Error';
import Home from '../pages';
import CssPage from '../pages/css';
import CssGridCoursePage from '../pages/css/courses/css-grid';
import AnimationHome from '../pages/animation';
import ComponentsHome from '../pages/component-library';
import JavaScriptHome from '../pages/javascript';
import CssGridCourseLessons from '../pages/css/courses/css-grid/lessons';

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
      { path: '/css', element: <CssPage /> },
      { path: '/css/courses', element: <CssPage /> },
      { path: '/css/courses/wesbos-css-grid', element: <CssGridCoursePage /> },
      {
        path: '/css/courses/wesbos-css-grid/:lessonName',
        element: <CssGridCourseLessons />,
      },
      { path: '/javascript', element: <JavaScriptHome /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
