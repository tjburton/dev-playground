import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import CssHome from './pages/css/CssHome';
import WesBosGrid, {
  LESSONS,
} from './pages/css/courses/WebBosCssGrid/WesBosCssGrid';
import Error from './pages/Error';

import App from './App';
import AnimationHome from './pages/animation/AnimationHome';
import ComponentsHome from './pages/components/ComponentsHome';
import JavaScriptHome from './pages/javascript/JavaScriptHome';

// TODO: Figure out how to dynamically route course pages
const getLesson = () => {
  return LESSONS[0].component;
};

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
        path: '/css/courses/wesbos-css-grid/:lesson',
        element: getLesson(),
      },
      { path: '/javascript', element: <JavaScriptHome /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
